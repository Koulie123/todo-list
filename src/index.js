import './styles/style.css';
import Todo from './modules/todo.js';
import {TodoList} from './modules/todoList.js';
import {showHome, hideHome} from './modules/home.js';
import project from './modules/project.js';
import displayProjectsModule from './modules/displayProjects.js';
import getTodayDate from './modules/getTodayDate.js';

let mainList = new TodoList();
readTodoFromLocalStorage();
let projectList = [];
readProjectsFromLocalStorage();





const centerContainerTableContainer = document.querySelector('.table-container');
const todoButton = document.querySelector('#all-todos');
const submitButton = document.querySelector('#create-todo');
const projectButton = document.querySelector('#show-projects');

submitButton.addEventListener('click', () => {
    console.log("todoButton clicked");
    if (document.querySelector("#todo-title").value == ""){
    } else {
        createTodoButton(mainList);
        console.log(mainList);
        displayTodos(mainList.getAllTodos(), centerContainerTableContainer);
    }

})



todoButton.addEventListener('click', () => {
    console.log("Button clicked");
    displayTodos(mainList.getAllTodos(), centerContainerTableContainer)
});

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => showHome(centerContainerTableContainer));


//todo List Display
function displayTodos(list, parent) {
    hideHome();
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
    if (sortedList.length > 0){
        sortedList.forEach((element) => {
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
            let projectName = projectList.find((project) => project.id == element.project)
            project.textContent = projectName ? projectName.name : "No Project";
            newRow.appendChild(project);
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "Delete";
            console.log(element.id);
            deleteButton.id = element.id;
            newRow.appendChild(deleteButton);
            deleteButton.addEventListener('click', () => {
                mainList.todos = mainList.todos.filter((todos) => todos.id !== deleteButton.id);
                saveTodoToLocalStorage(mainList);
                displayTodos(mainList.getAllTodos(), parent);
            });
    
    
    
            todoTableBody.appendChild(newRow);
    });
    table.appendChild(todoTableBody);
    parent.appendChild(table);
    }
    if (list.length == 0){
        console.log('no data');
        let noDataDiv = document.createElement('div');
        noDataDiv.textContent = 'You have no todos yet!';
        parent.appendChild(noDataDiv);
    }
}


//CREATING TODOS WHEN BUTTON CLICKED
function createTodoButton (todoListObject) {
    let titleInput = document.querySelector('#todo-title');

    if (titleInput.value != '') {
            let title = titleInput.value;
            titleInput.value = '';
            let dueDateInput = document.querySelector('#todo-due-date');
            let dueDate = dueDateInput.value;
            dueDateInput.value = getTodayDate();
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
            descriptionInput.value = '';
            let notesInput = document.querySelector('#todo-notes');
            let notes = notesInput.value;
            notesInput.value = '';
            console.log(title);
            let projectToAddTo = projectList.find((project) => project.id == projectId);
            let todo = new Todo(title, dueDate, priority, projectId, description, notes);
            projectToAddTo.associatedTodos.push(todo);
            console.log(projectList);

            todoListObject.todos.push(todo);
            console.log('these are the currently saved todos', mainList.todos);
            saveTodoToLocalStorage(mainList);
    }

}


const openTodoDialogButton = document.querySelectorAll('.create-new-todo');
console.log(openTodoDialogButton);
const createTodoDialogButton = document.querySelector('#create-todo');
if (openTodoDialogButton == null) console.log("todo dialog is null");
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

openTodoDialogButton.forEach((button) => {
    button.addEventListener('click', () => {
        todoDialog.showModal();
        displayProjectsInTodoOptions();
        let selectedProject = document.querySelector('#todo-project');
        selectedProject.selectedIndex = 0;
        let selectedDate = document.querySelector('#todo-due-date');
        selectedDate.value = getTodayDate();
        console.log('todo dialog should be open');
        displayProjectOptionsDialog();
    });
});
// Display TODO Projects in TODO Dialog.
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
if (projectList.length == 0){
    projectList.push(new project('Inbox', 'Default Option'));
    console.log(projectList);
}


// Creating Projects
const createNewProjectButton = document.querySelector('.new-project');
const newProjectDialogBox = document.querySelector('.create-new-project');
const projectSubmitButton = document.querySelector('#project-submit');
const cancelProjectButton = document.querySelector('#project-cancel');

createNewProjectButton.addEventListener('click', () => {
    newProjectDialogBox.showModal();
})
function createProjectFromForm() {
    let projName = document.querySelector('#project-name');
    let projDesc = document.querySelector('#project-description');
    if (projName !== null && projDesc !== null) {
        if (projDesc.value == '') {
            projDesc.value = 'No Description';
        }
        let newProject = new project(projName.value, projDesc.value);
        projectList.push(newProject);
        projName.value = '';
        projDesc.value = '';
        newProjectDialogBox.close();
        console.log(projectList);
        saveProjectsToLocalStorage();
    }
    displayProjects();


}
projectSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    createProjectFromForm();
})
projectButton.addEventListener('click', () => {
    console.log("Project Button");
    displayProjects();
})
cancelProjectButton.addEventListener('click', () => {
    let projName = document.querySelector('#project-name');
    let projDesc = document.querySelector('#project-description');
    projName.value = '';
    projDesc.value = '';
    newProjectDialogBox.close();

})

const displayProjects = function () {
    let listToDisplay = projectList;
    hideHome();
    const maincenterContainerTableContainer = document.querySelector('.table-container');
    const onDelete = (projectId) => {
        projectList = projectList.filter(project => project.id !== projectId);
        saveProjectsToLocalStorage();
        displayProjects();
    };
    displayProjectsModule(maincenterContainerTableContainer, listToDisplay, onDelete);

}

//SECTION FOR SAVING TO LOCAL STORAGE
function saveTodoToLocalStorage(todoListObject){
    try {
        let todoListObjectToSave = JSON.stringify(todoListObject);
        localStorage.setItem("fullListOfTodos", todoListObjectToSave);
        console.log('saved todos: ', todoListObjectToSave);
    } catch (error) {
        console.log('error saving todo list object to local storage' + error);
    }
}
function readTodoFromLocalStorage(){
    try {
        let todoListObjectReadFromStorage = localStorage.getItem("fullListOfTodos");
        let readTodoListObject = JSON.parse(todoListObjectReadFromStorage);
        let readTodoList = readTodoListObject.todos;
        console.log('readTodoFromLocalStorage', readTodoList);

        console.log('todo list read from storage', todoListObjectReadFromStorage);
        readTodoList.forEach((todo) => {
            let todoToPush = new Todo(todo.title, todo.dueDate, todo.priority, todo.project, todo.description, todo.notes);
            console.log('todo to push', todoToPush);
            mainList.todos.push(todoToPush);

        })
        
    } catch (error) {
        console.log('error reading the full todo list from the storage' + error);
    }
}

// saveTodoToLocalStorage(mainList);
function saveProjectsToLocalStorage(){
    try {
        console.log('saving projects');
        let projectListToSave = JSON.stringify(projectList);
        localStorage.setItem("fullListOfProjects", projectListToSave);
        console.log('saved projects: ', projectListToSave);
    } catch (error) {
        error.log('error saving the project list', )
    }

}
function readProjectsFromLocalStorage(){
    try {
        let projectsReadFromLocalStorage = localStorage.getItem('fullListOfProjects');
        let parsedProjectList = JSON.parse(projectsReadFromLocalStorage);
        projectList = [];
        parsedProjectList.forEach((project) => {
            projectList.push(project);
        })
    } catch (error) {
        console.log('error reading projects from storage' + error);
    }
}