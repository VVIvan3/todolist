class dataStorage {
    static storeProject(project) {
        const id = localStorage.length + 1
        localStorage.setItem(id, JSON.stringify(project));
    }
    static retriveData(id) {
        return JSON.parse(localStorage.getItem(id));
    }
}

export { dataStorage }