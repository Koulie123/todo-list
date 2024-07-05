export default class Todo {
    constructor(title, dueDate, priority,  project, description, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
    }
} 