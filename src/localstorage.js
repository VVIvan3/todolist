class dataStorage {
  static generateId() {
    return localStorage.length + 1;
  }
  static storeProject(project, id = this.generateId()) {
    localStorage.setItem(id, JSON.stringify(project));
  }
  static retriveData(id) {
    return JSON.parse(localStorage.getItem(id));
  }
}

export { dataStorage };
