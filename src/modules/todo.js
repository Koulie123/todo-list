export default class Todo {
    constructor(title, description, project,  dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.project = project;
        this.priority = priority;
        this.notes = notes;
    }
} 