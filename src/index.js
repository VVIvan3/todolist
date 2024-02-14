import './style.css';

const setUpButtons = (() => {
    const addProjectBtn = document.querySelector('.addproject');
    const creationDialog = document.querySelector('.new-project');
    addProjectBtn.addEventListener('click', () => {
        creationDialog.showModal();
    });
})();