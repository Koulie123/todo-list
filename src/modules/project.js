import {v4 as uuidv4} from 'uuid';

export default class project {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.id = uuidv4();
        this.associatedTodos = [];
    }
}