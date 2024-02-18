import "./style.css";
import { processProjectCreation } from "./projectcreation";
import { dataStorage } from "./localstorage";
import firstLoad from "./firstload";
import validate from "./formvalidation";
import { selection, getCurrentSelectionId } from "./selection";
import { createTodoObj } from "./createtodo";
import { editCurrentTodo } from "./todoediting";

const setUpButtons = (() => {
  const addProjectBtn = document.querySelector(".addproject");
  const creationDialog = document.querySelector(".new-project");
  const createBtn = document.querySelector(".create");
  const todoDialogBtn = document.querySelector(".todobtn");
  const createTodo = document.querySelector(".todocreate");
  const todoDialog = document.querySelector(".new-todo");
  const delPrjBtn = document.querySelector(".delprj");

  addProjectBtn.addEventListener("click", () => {
    creationDialog.showModal();
  });

  delPrjBtn.addEventListener("click", () => {
    mainFunctionality.deleteCurrentProject();
  });

  createBtn.addEventListener("click", () => {
    processProjectCreation();
    creationDialog.close();
    projectDisplay.renderScreen();
    selection("id-1");
  });

  todoDialogBtn.addEventListener("click", () => {
    todoDialog.showModal();
  });

  createTodo.addEventListener("click", () => {
    if (validate()) {
      const newTodo = createTodoObj();
      todoDialog.close();
      mainFunctionality.addNewTodo(newTodo);
    } else {
      alert("Please, fill every blanks");
    }
  });
})();

class projectDisplay {
  static renderScreen() {
    const projectList = document.querySelector(".projectlist");
    projectList.innerHTML = "";
    for (let i = 1; i <= localStorage.length; i++) {
      const newProject = document.createElement("li");
      const retrivedDataName = dataStorage.retriveData(i).name;
      newProject.textContent = retrivedDataName;
      newProject.classList.add("project");
      newProject.setAttribute("id", `id-${i}`);
      newProject.addEventListener("click", (event) => {
        selection(event.target.id);
        projectDisplay.renderTodos();
      });
      projectList.appendChild(newProject);
    }
  }
  static renderTodos() {
    const currentId = getCurrentSelectionId();
    const selectedProjectTodos = dataStorage.retriveData(currentId).todos;
    const displayBoard = document.querySelector(".display");
    displayBoard.innerHTML = "";
    for (let i = 0; i < selectedProjectTodos.length; i++) {
      const todo = selectedProjectTodos[i];
      const todoCard = document.createElement("div");
      todoCard.classList.add("todo-card");
      const todoTitle = document.createElement("h3");
      todoTitle.classList.add("todo-title");
      todoTitle.textContent = todo.title;
      const editBtn = document.createElement("button");
      editBtn.classList.add("edittodo");
      editBtn.textContent = "Edit";
      editBtn.id = `id-${i}`;
      editBtn.addEventListener("click", (event) =>
        mainFunctionality.editTodoDialog(event.target.id.split("-")[1])
      );
      const todoDesc = document.createElement("p");
      todoDesc.classList.add("todo-desc");
      todoDesc.textContent = todo.desc;

      const todoDue = document.createElement("p");
      todoDue.classList.add("todo-due");
      todoDue.textContent = `Due time: ${todo.due}`;

      todoCard.classList.add(todo.priority);

      todoCard.append(todoTitle, editBtn, todoDesc, todoDue);
      displayBoard.appendChild(todoCard);
    }
  }
}

class mainFunctionality {
  static addNewTodo(object) {
    const currentId = getCurrentSelectionId();
    const selectedProject = dataStorage.retriveData(currentId);
    selectedProject.todos.push(object);
    dataStorage.storeProject(selectedProject, currentId);
    projectDisplay.renderTodos();
  }
  static editTodoDialog(id) {
    const editDialog = document.querySelector(".edit-todo");
    editDialog.showModal();
    editCurrentTodo(id);
  }
  static deleteCurrentProject() {
    const currentId = getCurrentSelectionId();
    if (localStorage.length <= 1) {
      alert("Cannot remove last project");
    } else {
      for (let i = 0; i <= localStorage.length; i++) {
        if (i > currentId) {
          const replacementProject = dataStorage.retriveData(i);
          const prevPrj = i - 1;
          console.log(i);
          console.log(prevPrj);

          dataStorage.storeProject(replacementProject, prevPrj);
        }
      }
      localStorage.removeItem(localStorage.length);
      projectDisplay.renderScreen();
      selection("id-1");
      projectDisplay.renderTodos();
    }
  }
}

const initPage = (() => {
  if (localStorage.length == 0) {
    firstLoad();
  }
  projectDisplay.renderScreen();
  selection("id-1");
  projectDisplay.renderTodos();
})();

export { projectDisplay };
