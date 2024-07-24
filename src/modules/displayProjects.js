
export default function (parent, list, onDelete) {
    parent.innerHTML = '';

    if (list.length == 0){
        console.log('no data');
        let noDataDiv = document.createElement('div');
        noDataDiv.textContent = 'You have no projects yet!';
        parent.appendChild(noDataDiv);
    }
    let modifiedList = '';
    list.forEach((project) => {
        let table = document.createElement('table');
        table.classList.add('project-table');
        let thead = document.createElement('thead');
        let headRowOne = document.createElement('tr');
        headRowOne.rowSpan = 2;
        let colOne = document.createElement('th');
        colOne.colSpan = 3;
        colOne.textContent = project.name;
        let deleteData = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.id = project.id;
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            console.log('deleteButtonClicked');
            onDelete(deleteButton.id);
        });
        deleteData.appendChild(deleteButton);


        let headRowTwo = document.createElement('tr');
        headRowTwo.rowSpan = 2;
        let colTwo = document.createElement('th');
        colTwo.colSpan = 4;

        colTwo.textContent = project.description;
        let headRowThree = document.createElement('tr');

        let titleCol = document.createElement('th');
        titleCol.textContent = 'Title';
        titleCol.colSpan = 2;
        headRowThree.appendChild(titleCol);

        let dueDateCol = document.createElement('th');
        dueDateCol.textContent = 'Due-Date';
        headRowThree.appendChild(dueDateCol);

        let priorityCol = document.createElement('th');
        priorityCol.textContent = 'Priority';
        headRowThree.appendChild(priorityCol);



        
        headRowOne.appendChild(colOne);
        headRowOne.appendChild(deleteData);

        headRowTwo.appendChild(colTwo);        
        thead.appendChild(headRowOne);
        thead.appendChild(headRowTwo);
        thead.appendChild(headRowThree);
        table.appendChild(thead);
        parent.appendChild(table);

        let tableBody = document.createElement('tbody');
        if (project.associatedTodos.length > 0){
            
            project.associatedTodos.forEach((singleTodo) => {
                let row = document.createElement('tr');
                let nameColumn = document.createElement('td');
                nameColumn.textContent = singleTodo.title;
                row.appendChild(nameColumn);
                let dueDateColumn = document.createElement('td');
                dueDateColumn.textContent = singleTodo.dueDate;
                row.appendChild(dueDateColumn);
                let priorityColumn = document.createElement('td');
                priorityColumn.textContent = singleTodo.priority;
                row.appendChild(priorityColumn);

                tableBody.appendChild(row);
            })
        }
        table.appendChild(tableBody);


        
    })
}