import { Component, OnInit } from '@angular/core';

//custom 


import {todoValuesInterface} from './interfaces/todos.interface';

@Component({
    moduleId: module.id,
    selector: 'todu-component',
    templateUrl: 'todu.component.html',
    styleUrls:['todu.component.css']
    
})
export class ToduComponent implements OnInit {
    
    todoValue:todoValuesInterface;
    todoItems:any[];


    constructor() { 
        this.todoValue = {name:'',completed:false};
        this.todoItems = [];
    }

    //add todo item to list
    addTodoItem(newValue:todoValuesInterface):void{
        let newConfigObjValue:Object= {
            name:newValue['name'],
            completed:newValue['completed']
        }; 
        this.todoItems.push(newConfigObjValue);
        this.todoValue['name'] = "";

    }

    //update the todo completed or not 
    updateTodoItemCompleted(todoCompletedConfig:Object):void{
        let todoUpdatedToggle:boolean = todoCompletedConfig['todoCompleted'];
        this.todoItems[todoCompletedConfig['todoIndex']]['completed'] = todoUpdatedToggle;
                               
    }



    ngOnInit() { }
}