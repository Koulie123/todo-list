import Todo from './todo.js';

class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(name, dueDate, priority,  project, description, notes) {
        const newTodo = new Todo(name, dueDate, priority, project, description, notes);
        this.todos.push(newTodo);

    }

    getAllTodos() {
        return this.todos;
    }
}

function createTodoButton (mainList) {
    let title = document.querySelector('#todo-title').value;
    let dueDate = document.querySelector('#todo-due-date').value;
    console.log(dueDate);
    let priority = document.querySelector('#todo-priority').value;
    let project = document.querySelector('#todo-project').value;
    let description = document.querySelector('#todo-description').value;
    let notes = document.querySelector('#todo-notes').value;
    console.log(title);




    mainList.addTodo(title, dueDate, priority, project, description, notes);
}

export {TodoList, createTodoButton}