import './style.css';
import { processProjectCreation, projectStorage } from './projectcreation';
import { dataStorage } from './localstorage';

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
        mainFunctionality.renderProjects();
    });
})();

class projectDisplay {
    static renderScreen() {
        const projectList = document.querySelector('.projectlist');
        projectList.innerHTML = '';
        for (let i = 0; i < projectStorage.getStoredProjects().length; i++) {
            const newProject = document.createElement('li');
            const retrivedDataName = dataStorage.retriveData(i).name;
            newProject.textContent = retrivedDataName;
            newProject.classList.add('project');
            projectList.appendChild(newProject);
        }
    }
}

class mainFunctionality {
    static renderProjects () {
        dataStorage.storageProjects();
        projectDisplay.renderScreen();
    }
}
// TO-DO
// FUNCTIONALITY FOR TO-DO CREATION (PLUS THEIR STATUS, DATE, AND PRIORITY)
// FUNCTIONALITY FOR SELECTION
// FUNCTIONALITY FOR RERENDERING TODO-CARDS
// POSSIBILITY TO DELETE PROJECT AND TO-DOS
