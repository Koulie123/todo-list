import './styles/style.css';
import Todo from './modules/todo.js';
import {TodoList, createTodoButton} from './modules/todoList.js';
import home from './modules/home.js';
import displayTodos from './modules/displayTodos.js';

let mainList = new TodoList();



const centerContainer = document.querySelector('.todos-container');
const todoButton = document.querySelector('#all-todos');
const tableBody = document.querySelector('#table-body')
const submitButton = document.querySelector('#create-todo');
submitButton.addEventListener('click', () => {
    console.log("todoButton clicked");
    createTodoButton(mainList);
    console.log(mainList);
    displayTodos(mainList.getAllTodos(), tableBody);
})



todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList.getAllTodos(), tableBody)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => home(centerContainer));
