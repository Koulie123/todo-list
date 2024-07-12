import Todo from './todo.js';
import displayTodos from './displayTodos.js';

class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(name, dueDate, priority,  project, description, notes, id) {
        const newTodo = new Todo(name, dueDate, priority, project, description, notes, id);
        this.todos.push(newTodo);

    }
    removeTodoById(id){
        this.todos = this.todos.filter((element) => element.id !== id);
    }

    getAllTodos() {
        return this.todos;
    }
}



export {TodoList}