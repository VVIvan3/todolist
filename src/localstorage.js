import { projectStorage } from "./projectcreation";

class dataStorage {
    static storageProjects() {
        const localProjects = projectStorage.getStoredProjects();
        for (let i = 0; i < localProjects.length; i++) {
            localStorage.setItem(i, JSON.stringify(localProjects[i]));
        }
    }
    static retriveData(id) {
        return JSON.parse(localStorage.getItem(id));
    }
}

export { dataStorage }