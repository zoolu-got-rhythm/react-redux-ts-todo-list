"use strict";
exports.__esModule = true;
var actions = require("../types/todos");
function addTodoActionHelper(text) {
    return {
        type: actions.ADD_TODO_ACTION,
        text: text
    };
}
exports.addTodoActionHelper = addTodoActionHelper;
function createNewTodoActionHelper(id, text) {
    return {
        type: actions.ADD_TODO_ACTION,
        text: text,
        id: id
    };
}
exports.createNewTodoActionHelper = createNewTodoActionHelper;
function toggleTodoActionHelper(id) {
    return {
        type: actions.TOGGLE_TODO_ACTION,
        idOfTodoToToggle: id
    };
}
exports.toggleTodoActionHelper = toggleTodoActionHelper;
function deleteTodoActionHelper(idOfTodoToDelete) {
    return {
        type: actions.DELETE_TODO_ACTION,
        idOfTodoToDelete: idOfTodoToDelete
    };
}
exports.deleteTodoActionHelper = deleteTodoActionHelper;
