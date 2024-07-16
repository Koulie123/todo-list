import './styles/style.css';
import Todo from './modules/todo.js';
import {TodoList} from './modules/todoList.js';
import home from './modules/home.js';
import project from './modules/project.js';
import displayProjectsModule from './modules/displayProjects.js';

let mainList = new TodoList();
let projectList = [];


//TO BE DELETED TEST OF LOCAL STORAGE
let numberLocalStorage;
try {
    console.log('reading from storage');
    let readFromLocalStorage = localStorage.getItem("numberLocalStorage");
    numberLocalStorage = JSON.parse(readFromLocalStorage);
} catch (error) {
    console.log('error from reading from storage:', error);
}
if (!numberLocalStorage){
    console.log('creating number');
    numberLocalStorage = {number: 0};
}
try {
    console.log('increasing number');
    numberLocalStorage.number += 1;
    localStorage.setItem("numberLocalStorage", JSON.stringify(numberLocalStorage));
} catch (error) {
    console.log('Error saving to storage:', error);
}
console.log('Current number:', numberLocalStorage.number);


//TESTING SAVING A TODO
let todoToBeSaved;
try {
    console.log("reading from storage");
    let todoReadFromLocalStorage = localStorage.getItem("todoToBeSaved");
    let parsedTodoToBeSaved = JSON.parse(todoReadFromLocalStorage);
    todoToBeSaved = new Todo(
        parsedTodoToBeSaved.title,
        parsedTodoToBeSaved.dueDate,
        parsedTodoToBeSaved.priority,
        parsedTodoToBeSaved.project,
        parsedTodoToBeSaved.description,
        parsedTodoToBeSaved.notes
    );
    console.log('Todo read from storage:',  todoToBeSaved);
} catch (error) {
    console.log('error from reading from todo storage' + error);
}
if (!todoToBeSaved){
    todoToBeSaved = new Todo('title', 'theDate', 'high', 'none', 'description', 'notes');
}
try {
    console.log('writing to the local Storage');
    localStorage.setItem("todoToBeSaved" , JSON.stringify(new Todo('title1', 'date2', 'asd', 'asd', 'asd', 'asd')));
    console.log('wrote to storage');
} catch (error) {
    console.log('error writing to save' + error);
}




const centerContainer = document.querySelector('.center-container');
const todoButton = document.querySelector('#all-todos');
const tableBody = document.querySelector('#table-body')
const submitButton = document.querySelector('#create-todo');
const projectButton = document.querySelector('#show-projects');

submitButton.addEventListener('click', () => {
    console.log("todoButton clicked");
    createTodoButton(mainList);
    console.log(mainList);
    displayTodos(mainList.getAllTodos(), centerContainer);
})



todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList.getAllTodos(), centerContainer)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => home(centerContainer));


//todo List Display
function displayTodos(list, parent) {
    const table = document.createElement('table');
    table.id = 'todo-table';

    

    table.classList.remove('no-display');

    while (parent.firstChild) {
        parent.firstChild.remove();
    }
    let thead = document.createElement('thead');
    let theadRow = document.createElement('tr');
    let todoDone = document.createElement('th');
    todoDone.textContent = 'Done?';
    theadRow.appendChild(todoDone);
    let todoTitle = document.createElement('th');
    todoTitle.textContent = 'Title';
    theadRow.appendChild(todoTitle);
    let todoDueDate = document.createElement('th');
    todoDueDate.textContent = 'Due-Date';
    theadRow.appendChild(todoDueDate);
    let todoProprity = document.createElement('th');
    todoProprity.textContent = 'Priority';
    theadRow.appendChild(todoProprity);
    let todoProject = document.createElement('th');
    todoProject.textContent = 'Project';
    theadRow.appendChild(todoProject);
    let todoButtons = document.createElement('th');
    todoButtons.textContent = 'Place For Buttons';
    theadRow.appendChild(todoButtons);

    thead.appendChild(theadRow);
    table.appendChild(thead);


    let todoTableBody = document.createElement('tbody');
    let sortedList = list.sort()
    if (list.length > 0){
        list.forEach((element) => {
            console.log(element);
            let newRow = document.createElement('tr');
            newRow.classList.add('todo-row');

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
            project.textContent = element.project.name;
            newRow.appendChild(project);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            console.log(element.id);
            deleteButton.id = element.id;
            newRow.appendChild(deleteButton);
            deleteButton.addEventListener('click', () => {
                mainList.todos = mainList.todos.filter((todos) => todos.id !== deleteButton.id);
                displayTodos(mainList.getAllTodos(), parent);
            });
    
    
    
            todoTableBody.appendChild(newRow);
    });
    table.appendChild(todoTableBody);
    parent.appendChild(table);
    }
}


//CREATING TODOS WHEN BUTTON CLICKED
function createTodoButton (todoListObject) {
    let mainList = todoListObject
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
            let projectId = projectInput.value;
            projectInput.selectedIndex = 0;
            console.log("project Selected" + project);
            let descriptionInput = document.querySelector('#todo-description');
            let description = descriptionInput.value;
            descriptionInput = '';
            let notesInput = document.querySelector('#todo-notes');
            let notes = notesInput.value;
            notesInput.value = '';
            console.log(title);
            let projectToAddTo = projectList.find((project) => project.id == projectId);
            let todo = new Todo(title, dueDate, priority, projectId, description, notes);
            projectToAddTo.associatedTodos.push(todo);
            console.log(projectList);

            todoListObject.todos.push(todo);
            // todoListObject.addTodo(title, dueDate, priority, project, description, notes);
            saveUserTodos(todoListObject);
    }

}

//SAVING THE TODO TO LOCAL STORAGE
function saveUserTodos(todoListObject){
    localStorage.setItem("SavedTodos", JSON.stringify(todoListObject.todos));
    console.log(todoListObject.todos);
    console.log(JSON.parse(localStorage.getItem("SavedTodos")) + "Are saved");
    console.log("Save Ran");
    

}

const openTodoDialogButton = document.querySelectorAll('.create-new-todo');
console.log(openTodoDialogButton);
const createTodoDialogButton = document.querySelector('#create-todo');
if (openTodoDialogButton == null) console.log("todo dialog is null");
const todoDialog = document.querySelector('#todo-form-dialog')

function displayProjectOptionsDialog() {
    console.log('line 126 reached');
    let todoSelectProject = document.querySelector('#todo-project');
    todoSelectProject.innerHTML = '';
    projectList.forEach((project) => {
        let option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
        todoSelectProject.appendChild(option);
    })
}

openTodoDialogButton.forEach((button) => {
    button.addEventListener('click', () => {
        todoDialog.showModal();
        displayProjectsInTodoOptions();
        console.log('todo dialog should be open');
        displayProjectOptionsDialog();
    });
});
// Display TODO Projects in TODO Dialog
function displayProjectsInTodoOptions() {
    let selectBox = document.querySelector('#todo-project');
    selectBox.innerHTML = '';
    projectList.forEach((project) => {
        let option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.name;
    })
}

createTodoDialogButton.addEventListener('click', () => {
    todoDialog.close();
})
//Cancel Making TODO
const cancelButton = document.querySelector('#cancel-todo');
cancelButton.addEventListener('click', () => {
    todoDialog.close();
})


//CREATING DEFAULT PROJECTS
projectList.push(new project('Inbox', 'Default Option'));
projectList.push(new project("Test1", "Description1"));
console.log(projectList);

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

//SECTION FOR SAVING TO LOCAL STORAGE

