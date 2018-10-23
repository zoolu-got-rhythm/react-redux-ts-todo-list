// import { TODO_STATE } from "../reducers/todosReducerWithComposition";
import * as actions from "../types/todos";


export interface baseAction{
    readonly type: string; 
}

export interface add_todo_action extends baseAction{
    readonly text: string; 
}

export interface make_todo_action extends baseAction{
    readonly text: string; 
    readonly id: number; 
}

export interface toggle_todo_action extends baseAction{
    readonly idOfTodoToToggle: number
}

export interface delete_todo_action extends baseAction{
   readonly idOfTodoToDelete: number
}

export type todo_actions = add_todo_action | toggle_todo_action | delete_todo_action; 

export function addTodoActionHelper(text: string): add_todo_action{
    return {
        type: actions.ADD_TODO_ACTION, 
        text, 
    }
}

export function createNewTodoActionHelper(id: number, text: string): make_todo_action{
    return {
        type: actions.ADD_TODO_ACTION, 
        text, 
        id
    }
}


export function toggleTodoActionHelper(id: number): toggle_todo_action{
    return {
        type: actions.TOGGLE_TODO_ACTION, 
        idOfTodoToToggle: id
    }
}

export function deleteTodoActionHelper(idOfTodoToDelete: number): delete_todo_action{
    return {
        type: actions.DELETE_TODO_ACTION, 
        idOfTodoToDelete
    }
}

