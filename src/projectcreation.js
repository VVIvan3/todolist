const projectStorage = (() => {
    const storedProjects = [];

    const storeNewProject = function(value) {
        storedProjects.push(value);
    }

    const getStoredProjects = function() {
        return storedProjects;
    }

    return { storeNewProject, getStoredProjects }
})();

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
    projectStorage.storeNewProject(newProject);
    inputField.value = ''
}


export { processProjectCreation, projectStorage }