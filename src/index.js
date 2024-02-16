import './style.css';
import { processProjectCreation } from './projectcreation';
import { dataStorage } from './localstorage';
import firstLoad from './firstload';
import validate from './formvalidation';
import { selection, getCurrentSelectionId } from './selection';
import { createTodoObj } from './createtodo';

const setUpButtons = (() => {
    const addProjectBtn = document.querySelector('.addproject');
    const creationDialog = document.querySelector('.new-project');
    const createBtn = document.querySelector('.create');
    const todoDialogBtn = document.querySelector('.todobtn');
    const createTodo = document.querySelector('.todocreate');
    const todoDialog = document.querySelector('.new-todo');

    addProjectBtn.addEventListener('click', () => {
        creationDialog.showModal();
    });

    createBtn.addEventListener('click', () => {
        processProjectCreation();
        creationDialog.close();
        projectDisplay.renderScreen();
    });

    todoDialogBtn.addEventListener('click', () => {
        todoDialog.showModal();
    });

    createTodo.addEventListener('click', () => {
        if (validate()) {
            const newTodo = createTodoObj();
            todoDialog.close();
            mainFunctionality.addNewTodo(newTodo);
        } else {
            alert('Please, fill every blanks')
        }
    });

})();

class projectDisplay {
    static renderScreen() {
        const projectList = document.querySelector('.projectlist');
        projectList.innerHTML = '';
        for (let i = 1; i <= localStorage.length; i++) {
            const newProject = document.createElement('li');
            const retrivedDataName = dataStorage.retriveData(i).name;
            newProject.textContent = retrivedDataName;
            newProject.classList.add('project');
            newProject.setAttribute('id', `id-${i}`);
            newProject.addEventListener('click', (event) => selection(event.target.id));
            projectList.appendChild(newProject);
        }
    }
}

class mainFunctionality {
    static addNewTodo(object) {
        const currentId = getCurrentSelectionId();
        const selectedProject = dataStorage.retriveData(currentId);
        selectedProject.todos.push(object);
        dataStorage.storeProject(selectedProject, currentId);
    }
}

const initPage = (() => {
    if (localStorage.length == 0) {
        firstLoad();
    }
    projectDisplay.renderScreen();
    selection('id-1');
})();
// TO-DO
// RERENDER SELECTION WHEN NEW OBJECT IS CREATED !!!!!
// FUNCTIONALITY FOR TO-DO CREATION (PLUS THEIR STATUS, DATE, AND PRIORITY)
// FUNCTIONALITY FOR SELECTION
// FUNCTIONALITY FOR RERENDERING TODO-CARDS
// POSSIBILITY TO DELETE PROJECT AND TO-DOS
