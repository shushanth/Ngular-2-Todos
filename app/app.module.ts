import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//customs
import { AppComponent }   from './components/app.component';
import { HeaderComponent } from './components/headers/header.component';
import { ToduComponent } from './components/toduApp/todu.component';

import { InsertTodoComponent } from './components/toduApp/insertTodo/inserttodo.component';
import { DisplayTodoComponent } from './components/toduApp/displayTodo/displaytodo.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
        ],
    
    declarations:[
        AppComponent,
        HeaderComponent,
        ToduComponent,
        InsertTodoComponent,
        DisplayTodoComponent
    ],

    bootstrap:[AppComponent]
})
export class AppModule { }
