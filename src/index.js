import './styles/style.css';
import Todo from './modules/todo.js';
import {TodoList, createTodoButton} from './modules/todoList.js';
import home from './modules/home.js';
import displayTodos from './modules/displayTodos.js';

let mainList = new TodoList();

mainList.addTodo("hello", "desc", "june", "low", "notes");
mainList.addTodo("world", "another desc", "july", "high", "more notes");

const centerContainer = document.querySelector('.todos-container');
const todoButton = document.querySelector('#all-todos');
const tableContainer = document.querySelector('#todo-table')
const submitButton = document.querySelector('#create-todo');
submitButton.addEventListener('click', () => {
    console.log("todoButton clicked");
    createTodoButton(mainList);
    console.log(mainList);
})



todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList.getAllTodos(), tableContainer)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => home(centerContainer));
