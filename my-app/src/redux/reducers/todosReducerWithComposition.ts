import {todo_actions, add_todo_action, delete_todo_action, toggle_todo_action, createNewTodoActionHelper, make_todo_action} from "../actions/todos";
import * as actions from "../types/todos"; 

// state shape
export interface TODO_STATE {
    id: number; 
    text: string; 
    completed?: boolean; 
}

export type TODO_STATE_OR_UNDEFINED = TODO_STATE | undefined; 

// reducer composition
const todo = (state: TODO_STATE_OR_UNDEFINED, action: todo_actions): TODO_STATE_OR_UNDEFINED => {
    console.log(action); 
    switch(action.type){
        case actions.MAKE_TODO_ACTION:
            let castedAction: make_todo_action = <make_todo_action>action; 
            return <TODO_STATE>{ 
                id: castedAction.id, 
                text: castedAction.text,
                completed: false
            };
        default: 
            return state;
    } 
};

export type TODOS_ARRAY = TODO_STATE_OR_UNDEFINED[];
// state shape
export interface TODOS_STATE{
    numberOfTodosMade: number;
    todosArray: TODOS_ARRAY; 
}

const todos = (state: TODOS_STATE = {numberOfTodosMade: 0, todosArray: []}, action: todo_actions): TODOS_STATE => {
    switch (action.type){
        case actions.ADD_TODO_ACTION:
            let actionAsAddTodoAction = <add_todo_action> action; 
            return {
                numberOfTodosMade: state.numberOfTodosMade + 1, 
                todosArray: [...state.todosArray, 
                    todo(undefined, createNewTodoActionHelper(
                        state.numberOfTodosMade + 1,
                        actionAsAddTodoAction.text
                    ))]
            };
        case actions.DELETE_TODO_ACTION:
            let castedAction = <delete_todo_action>action;
            if(castedAction.idOfTodoToDelete === 0)
                return {...state, todosArray: state.todosArray.slice(1)};
            if(castedAction.idOfTodoToDelete === state.todosArray.length)
                return {
                    ...state, 
                    todosArray: state.todosArray.slice(0, state.todosArray.length - 1)
                }
                
            return {
                ...state, 
                todosArray: state.todosArray.slice(0, castedAction.idOfTodoToDelete)
                .concat().slice(castedAction.idOfTodoToDelete + 1, state.todosArray.length)
            }
        case actions.TOGGLE_TODO_ACTION:
            let castedActionAsToggle = <toggle_todo_action> action;
            return {
                ...state, 
                todosArray: <TODOS_ARRAY>state.todosArray.map((todo: TODO_STATE, index: number) => {
                    return index === castedActionAsToggle.idOfTodoToToggle ?
                        {...todo, completed: !todo.completed} : todo;
                })
            }
        default:
            return state;

    }
};

export default todos;







