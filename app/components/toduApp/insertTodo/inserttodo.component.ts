import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'insert-todo-component',
    templateUrl: 'inserttodo.component.html',
    styleUrls:['inserttodo.component.css']
})
export class InsertTodoComponent implements OnInit {
    
    //Inputs,Outputs
    @Input() todoValue:string;
    @Output() insertTodo:EventEmitter<any> = new EventEmitter();
    
    //constructor
    constructor() {
        
     }
    
    //add todo item to the list and event emit to the main container
     addTodoItem(event:Event):void{
         debugger;
         if(!this.todoValue['name'])
             return;

        this.insertTodo.emit(this.todoValue);
     }

   

    ngOnInit() { }
}