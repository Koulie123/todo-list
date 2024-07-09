import {v4 as uuidv4} from 'uuid';


export default class Todo {
    constructor(title, dueDate, priority,  project, description, notes, id) {
        this.title = title;
        this.id = uuidv4();
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }
} 