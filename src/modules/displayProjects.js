

export default function (parent, list) {
    parent.innerHTML = '';

    list.forEach((project) => {
        let table = document.createElement('table');
        table.classList.add('project-table');
        let thead = document.createElement('thead');
        let headRowOne = document.createElement('tr');
        let colOne = document.createElement('th');
        colOne.textContent = project.name;
        let headRowTwo = document.createElement('tr');

        let colTwo = document.createElement('th');
        colTwo.textContent = project.description;
        
        headRowOne.appendChild(colOne);
        headRowTwo.appendChild(colTwo);
        thead.appendChild(headRowOne);
        thead.appendChild(headRowTwo);
        table.appendChild(thead);
        parent.appendChild(table);

        let tableBody = document.createElement('tbody');
        if (project.associatedTodos.length > 0){
            project.associatedTodos.forEach((singleTodo) => {
                let row = document.createElement('tr');
                let nameColumn = document.createElement('td');
                nameColumn.textContent = singleTodo.title;
                row.appendChild(nameColumn);
                tableBody.appendChild(row);
            })
        }
        table.appendChild(tableBody);


        
    })
}