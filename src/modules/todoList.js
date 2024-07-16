import Todo from './todo.js';
import displayTodos from './displayTodos.js';

class TodoList {
    constructor() {
        this.todos = [];
    }
    addTodo(name, dueDate, priority,  project, description, notes) {
        const newTodo = new Todo(name, dueDate, priority, project, description, notes);
        this.todos.push(newTodo);
        // this.saveUserTodos();


    }
    removeTodoById(id){
        this.todos = this.todos.filter((element) => element.id !== id);
    }

    getAllTodos() {
        return this.todos;
    }

}



export {TodoList}