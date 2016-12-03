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
var DisplayTodoComponent = (function () {
    function DisplayTodoComponent() {
        this.todoCompletedToggle = new core_1.EventEmitter();
    }
    DisplayTodoComponent.prototype.todoToggle = function (event) {
        this.todoCompletedToggle.emit({ todoCompleted: this.todoCompleted, todoIndex: this.todoIndex });
    };
    DisplayTodoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DisplayTodoComponent.prototype, "todoName", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DisplayTodoComponent.prototype, "todoCompleted", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], DisplayTodoComponent.prototype, "todoIndex", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DisplayTodoComponent.prototype, "todoCompletedToggle", void 0);
    DisplayTodoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'display-todo-component',
            templateUrl: 'displaytodo.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayTodoComponent);
    return DisplayTodoComponent;
}());
exports.DisplayTodoComponent = DisplayTodoComponent;
//# sourceMappingURL=displaytodo.component.js.map