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
    todos = [];

    constructor(projectname) {
        this.name = projectname;
    }
}



function processProjectCreation() {
    const inputField = document.querySelector('#newprj');
    const newProject = new Project(inputField.value);
    projectStorage.storeNewProject(newProject);
}


export { processProjectCreation, projectStorage }