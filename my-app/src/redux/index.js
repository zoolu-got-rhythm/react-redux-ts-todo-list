"use strict";
exports.__esModule = true;
var store_1 = require("./store");
var todos_1 = require("./actions/todos");
var store = store_1["default"]();
console.log(store.getState());
store.dispatch(todos_1.addTodoActionHelper("sdfsdf"));
console.log(store.getState().todosReducer.todosArray);
