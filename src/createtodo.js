class Todo {
    constructor(title, desc, due) {
        this.title = title;
        this.desc = desc;
        this.due = due;
        this.priority = 'blank for now';
    }
}

function createTodoObj() {
    const inputTitle = document.querySelector('#todotitle');
    const inputDesc = document.querySelector('#tododesc');
    const inputDue = document.querySelector('#tododue');

    return new Todo(inputTitle.value, inputDesc.value, inputDue.value);
}

export { createTodoObj }