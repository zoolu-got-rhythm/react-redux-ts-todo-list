"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var todos_1 = require("../actions/todos");
var actions = require("../types/todos");
// reducer composition
var todo = function (state, action) {
    switch (action.type) {
        case actions.ADD_TODO_ACTION:
            var castedAction = action;
            return {
                text: castedAction.text,
                completed: false
            };
        default:
            return state;
    }
};
var todos = function (state, action) {
    if (state === void 0) { state = { numberOfTodosMade: 0, todosArray: [] }; }
    switch (action.type) {
        case actions.ADD_TODO_ACTION:
            var actionAsAddTodoAction = action;
            return {
                numberOfTodosMade: state.numberOfTodosMade + 1,
                todosArray: state.todosArray.concat([todo(undefined, todos_1.createNewTodoActionHelper(state.numberOfTodosMade + 1, actionAsAddTodoAction.text))])
            };
        case actions.DELETE_TODO_ACTION:
            console.log("delete action hit");
            var castedAction = action;
            if (castedAction.idOfTodoToDelete === 0)
                return __assign({}, state, { todosArray: state.todosArray.slice(1) });
            if (castedAction.idOfTodoToDelete === state.todosArray.length)
                return __assign({}, state, { todosArray: state.todosArray.slice(0, state.todosArray.length - 1) });
            return __assign({}, state, { todosArray: state.todosArray.slice(0, castedAction.idOfTodoToDelete)
                    .concat().slice(castedAction.idOfTodoToDelete + 1, state.todosArray.length) });
        case actions.TOGGLE_TODO_ACTION:
            var castedActionAsToggle_1 = action;
            return __assign({}, state, { 
                // @ts-ignore
                todosArray: state.todosArray.map(function (todo, index) {
                    return index === castedActionAsToggle_1.idOfTodoToToggle ? __assign({}, todo, { completed: !todo.completed }) : todo;
                }) });
        default:
            return state;
    }
};
exports["default"] = todos;
