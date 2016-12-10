"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var InsertTodoComponent = (function () {
    //constructor
    function InsertTodoComponent() {
        this.insertTodo = new core_1.EventEmitter();
    }
    //add todo item to the list and event emit to the main container
    InsertTodoComponent.prototype.addTodoItem = function (event) {
        debugger;
        if (!this.todoValue['name'])
            return;
        this.insertTodo.emit(this.todoValue);
    };
    InsertTodoComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], InsertTodoComponent.prototype, "todoValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], InsertTodoComponent.prototype, "insertTodo", void 0);
    InsertTodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'insert-todo-component',
            templateUrl: 'inserttodo.component.html',
            styleUrls: ['inserttodo.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], InsertTodoComponent);
    return InsertTodoComponent;
}());
exports.InsertTodoComponent = InsertTodoComponent;
//# sourceMappingURL=inserttodo.component.js.map