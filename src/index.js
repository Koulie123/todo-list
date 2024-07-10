import './styles/style.css';
import Todo from './modules/todo.js';
import {TodoList, createTodoButton} from './modules/todoList.js';
import home from './modules/home.js';
import project from './modules/project.js';
import displayProjectsModule from './modules/displayProjects.js';

let mainList = new TodoList();
let projectList = [];


let globalId = 0;

const centerContainer = document.querySelector('.todos-container');
const todoButton = document.querySelector('#all-todos');
const tableBody = document.querySelector('#table-body')
const submitButton = document.querySelector('#create-todo');
const projectButton = document.querySelector('#show-projects');
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
    let sortedList = list.sort()
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

const openTodoDialog = document.querySelector('#open-todo-dialog');
const sideMenuTodoCreator = document.querySelector('.create-new-todo');
const closeTodoDialog = document.querySelector('#create-todo');
if (openTodoDialog == null) console.log("todo dialog is null");
const todoDialog = document.querySelector('#todo-form-dialog')
function displayProjectOptionsDialog() {
    let todoSelectProject = document.querySelector('#todo-project');
    todoSelectProject.innerHTML = '';
    projectList.forEach((project) => {
        let option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        todoSelectProject.appendChild(option);
    })
}

openTodoDialog.addEventListener('click', () => {
    displayProjectOptionsDialog();
    todoDialog.showModal();
})
closeTodoDialog.addEventListener('click', () => {
    todoDialog.close();
})
sideMenuTodoCreator.addEventListener('click', () => {
    displayProjectOptionsDialog();

    todoDialog.showModal();
})


//CREATING DEFAULT PROJECTS
projectList.push(new project('Inbox', 'Default Option'));

// Creating Projects
const createNewProjectButton = document.querySelector('.new-project');
const newProjectDialogBox = document.querySelector('.create-new-project');
const projectSubmitButton = document.querySelector('#project-submit');

createNewProjectButton.addEventListener('click', () => {
    newProjectDialogBox.showModal();
})
function createProjectFromForm() {
    let projName = document.querySelector('#project-name');
    let projDesc = document.querySelector('#project-description');
    if (projName !== null && projDesc !== null) {
        let newProject = new project(projName.value, projDesc.value);
        projectList.push(newProject);
        projName.value = '';
        projDesc.value = '';
        newProjectDialogBox.close();
        console.log(projectList);
    }


}
projectSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createProjectFromForm();
})
projectButton.addEventListener('click', () => {
    console.log("Project Button");
    displayProjects();
})
const displayProjects = function () {
    let listToDisplay = projectList;
    const mainCenterContainer = document.querySelector('.center-container');
    displayProjectsModule(mainCenterContainer, listToDisplay);
}
