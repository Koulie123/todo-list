

export default function (parent, list) {
    list.forEach((project) => {
        parent.innerHTML = '';
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
    })
}