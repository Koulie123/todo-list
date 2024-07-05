import Todo from './todo.js';
import displayTodos from './displayTodos.js';

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
    let titleInput = document.querySelector('#todo-title');

    if (titleInput.value != '') {
            let title = titleInput.value;
            titleInput.value = '';
            let dueDateInput = document.querySelector('#todo-due-date');
            let dueDate = dueDateInput.value;
            dueDateInput.value = '';
            console.log(dueDate);
            let priorityInput = document.querySelector('#todo-priority');
            let priority = priorityInput.value;
            priorityInput.selectedIndex = 0;

            let projectInput = document.querySelector('#todo-project');
            let project = projectInput.value;
            projectInput.selectedIndex = 0;
            let descriptionInput = document.querySelector('#todo-description');
            let description = descriptionInput.value;
            descriptionInput = '';
            let notesInput = document.querySelector('#todo-notes');
            let notes = notesInput.value;
            notesInput.value = '';
            console.log(title);
        
        
        
        
            mainList.addTodo(title, dueDate, priority, project, description, notes);
    }

}

export {TodoList, createTodoButton}