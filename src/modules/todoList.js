import Todo from './todo.js';

export default class TodoList {
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