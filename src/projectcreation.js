import { dataStorage } from "./localstorage";

class Project {
    todos = [
        {
            title: 'test1',
            desc: 'test2'
        }
    ];

    constructor(projectname) {
        this.name = projectname;
    }
}

function checkName(name) {
    if (name.length == 0 || name === '' || name === ' ') {
        return 'unnamed';
    }
    return name;
}

function processProjectCreation() {
    const inputField = document.querySelector('#newprj');
    const newProject = new Project(checkName(inputField.value));
    dataStorage.storeProject(newProject);
    inputField.value = '';
}


export { processProjectCreation, }