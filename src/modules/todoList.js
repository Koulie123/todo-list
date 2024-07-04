import Todo from './todo.js';

export default class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(name, description, dueDate, priority, notes) {
        const newTodo = new Todo(name, description, dueDate, priority, notes);
        this.todos.push(newTodo);

    }

    getAllTodos() {
        return this.todos;
    }
}