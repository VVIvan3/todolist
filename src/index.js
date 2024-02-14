import './style.css';
import processProjectCreation from './projectcreation';

const setUpButtons = (() => {
    const addProjectBtn = document.querySelector('.addproject');
    const creationDialog = document.querySelector('.new-project');
    const createBtn = document.querySelector('.create');

    addProjectBtn.addEventListener('click', () => {
        creationDialog.showModal();
    });

    createBtn.addEventListener('click', () => {
        processProjectCreation();
        creationDialog.close();
    })
})();