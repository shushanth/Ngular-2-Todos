import { Component, OnInit ,Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'header-component',
    templateUrl:'header.component.html',
    styleUrls:['header.component.css']

})
export class HeaderComponent implements OnInit {
    
    @Input() headerTitle:string;

    constructor() { }

    ngOnInit() { }
}