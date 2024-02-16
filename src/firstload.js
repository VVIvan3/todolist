import { Project } from "./projectcreation";
import { dataStorage } from "./localstorage";

export default function firstLoad() {
    const exampleProject = new Project('example');
    dataStorage.storeProject(exampleProject);
}