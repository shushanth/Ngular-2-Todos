
//core a2 modules
import { Component, OnInit } from '@angular/core';


//custom components

import {HeaderComponent} from './headers/header.component';

@Component({
    moduleId: module.id,
    selector: 'todu-app',
    templateUrl: 'app.component.html',
    
})
export class AppComponent implements OnInit {
    
    hTitle:string;

    constructor() {
        this.hTitle = "Ngular-2 Todo App";
     }

    ngOnInit() { }
}