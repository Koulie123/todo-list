import './styles/style.css';
import Todo from './modules/todo.js';
import todoList from './modules/todoList.js';
import home from './modules/home.js';
import displayTodos from './modules/displayTodos.js';

let mainList = new todoList();

mainList.addTodo("hello", "desc", "june", "low", "notes");
mainList.addTodo("world", "another desc", "july", "high", "more notes");

const centerContainer = document.querySelector('.center-container');
const todoButton = document.querySelector('#all-todos');
todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList, centerContainer)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => home(centerContainer));
