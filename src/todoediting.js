import { dataStorage } from "./localstorage";
import { getCurrentSelectionId } from "./selection";
import { projectDisplay } from ".";

function editCurrentTodo(id) {
    const editDialog = document.querySelector('.edit-todo');
    const currentProjectTodo = dataStorage.retriveData(getCurrentSelectionId()).todos[id];
    const editTitle = document.querySelector('#edit-todotitle');
    const editDesc = document.querySelector('#edit-tododesc');
    editTitle.value = currentProjectTodo.title;
    editDesc.value = currentProjectTodo.desc;
    const editBtn = document.querySelector('.edit-todoedit');
    editBtn.addEventListener('click', function makeChanges() {
        currentProjectTodo.title = editTitle.value;
        currentProjectTodo.desc = editDesc.value;


        const overwrite = dataStorage.retriveData(getCurrentSelectionId())
        overwrite.todos[id] = currentProjectTodo;
        dataStorage.storeProject(overwrite, getCurrentSelectionId());
        editDialog.close();
        projectDisplay.renderTodos();
        // editBtn.removeEventListener('click', makeChanges);
        cleanEventListeners();
    });

    const delBtn = document.querySelector('.edit-tododel');
    delBtn.addEventListener('click', function deleteTodo() {
        const newTodoArray = dataStorage.retriveData(getCurrentSelectionId());
        newTodoArray.todos.splice(id, 1);
        dataStorage.storeProject(newTodoArray, getCurrentSelectionId());
        // delBtn.removeEventListener('click', deleteTodo);
        editDialog.close();
        projectDisplay.renderTodos();
        cleanEventListeners()
    });
}

function cleanEventListeners() {
    const btns = document.querySelectorAll('.editbtn');
    btns.forEach((btn) => {
        btn.replaceWith(btn.cloneNode(true));
    });
}

export { editCurrentTodo }