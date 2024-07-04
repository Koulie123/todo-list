import todo from "./todo";
import todoList from "./todoList";

export default function (list, parent) {
    parent.innerHTML = '';
    let listToDisplay = list.getAllTodos();
    listToDisplay.forEach(element => {
        let listItemDiv = document.createElement('div');
        let titleDiv = document.createElement('div');
        titleDiv.textContent = element.title;

        listItemDiv.appendChild(titleDiv);
        parent.appendChild(listItemDiv);
    });
}