import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'display-todo-component',
    templateUrl: 'displaytodo.component.html'
})
export class DisplayTodoComponent implements OnInit {

    //Inputs,Outputs
    @Input() todoName:string;
    @Input() todoCompleted:boolean;
    @Input() todoIndex:number;
    
    @Output() todoCompletedToggle:EventEmitter<any> = new EventEmitter();


    constructor() {}

    todoToggle(event:Event):void{
        this.todoCompletedToggle.emit({todoCompleted:this.todoCompleted,todoIndex:this.todoIndex});
    }

    ngOnInit() { 
    }
}