import './styles/style.css';
import Todo from './modules/todo.js';
import {TodoList, createTodoButton} from './modules/todoList.js';
import home from './modules/home.js';
// import displayTodos from './modules/displayTodos.js';

let mainList = new TodoList();

let globalId = 0;

const centerContainer = document.querySelector('.todos-container');
const todoButton = document.querySelector('#all-todos');
const tableBody = document.querySelector('#table-body')
const submitButton = document.querySelector('#create-todo');
submitButton.addEventListener('click', () => {
    console.log("todoButton clicked");
    createTodoButton(mainList, globalId);
    console.log(mainList);
    displayTodos(mainList.getAllTodos(), tableBody);
    globalId ++;
})



todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList.getAllTodos(), tableBody)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => home());


//todo List Display
function displayTodos(list, parent) {
    const table = document.querySelector('.todos-container')

    if (table.classList.contains('no-display')){
        table.classList.remove('no-display');
    }
    table.classList.remove('no-display');

    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    if (list.length > 0){
        list.forEach((element) => {
            let newRow = document.createElement('tr');
            let completed = document.createElement('td');
            let completedCheck = document.createElement('input')
            completedCheck.type = 'checkbox';
            completedCheck.value = element.completed;
            completed.appendChild(completedCheck);
            newRow.appendChild(completed);

            let title = document.createElement('td');
            title.textContent = element.title;
            newRow.appendChild(title);
            let dueDate = document.createElement('td');
            dueDate.textContent = element.dueDate;
            newRow.appendChild(dueDate);
            let priority = document.createElement('td');
            priority.textContent = element.priority;
            newRow.appendChild(priority);
            let project = document.createElement('td');
            project.textContent = element.project;
            newRow.appendChild(project);
            newRow.classList.add('todo-row');
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            console.log(element.id);
            deleteButton.id = element.id;
            newRow.appendChild(deleteButton);
            deleteButton.addEventListener('click', () => {
                mainList.todos = mainList.todos.filter((todos) => todos.id !== deleteButton.id);
                displayTodos(mainList.getAllTodos(), parent);
            });
    
    
    
            parent.appendChild(newRow);
    });
    }
}


