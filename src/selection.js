function selection(id) {
  const allProject = document.querySelectorAll(".project");
  const selected = document.querySelector(`#${id}`);
  allProject.forEach((project) => {
    project.classList.remove("selected");
  });
  selected.classList.add("selected");
}

function getCurrentSelectionId() {
  const selected = document.querySelector(".selected");
  return selected.id.split("-")[1];
}

export { selection, getCurrentSelectionId };
