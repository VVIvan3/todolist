class Todo {
  constructor(title, desc, due, priority) {
    this.title = title;
    this.desc = desc;
    this.due = due;
    this.priority = priority;
  }
}

function createTodoObj() {
  const inputTitle = document.querySelector("#todotitle");
  const inputDesc = document.querySelector("#tododesc");
  const inputDue = document.querySelector("#tododue");
  const inputPriority = document.querySelector("#todopriority");

  return new Todo(
    inputTitle.value,
    inputDesc.value,
    inputDue.value,
    inputPriority.value
  );
}

export { createTodoObj };
