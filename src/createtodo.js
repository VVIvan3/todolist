class Todo {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
        this.due = 'blank for now';
        this.priority = 'blank for now';
    }
}

function createTodo() {
    const inputTitle = document.querySelector('#todotitle');
    const inputDesc = document.querySelector('#tododesc');

    const newTodo = new Todo(inputTitle.value, inputDesc.value);
}