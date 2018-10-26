import { baseAction } from './todos';
import * as todoFilterActions from "../types/todoFilters"; 


export interface show_all_todos_action extends baseAction{}

export interface show_all_completed_todos_actions extends baseAction{}

export interface show_all_active_todos_action extends baseAction{}



export type todo_filter_actions = show_all_active_todos_action | show_all_completed_todos_actions
 | show_all_todos_action; 

 export function showAllTodosActionHelper(): show_all_todos_action{
     return {
         type: todoFilterActions.SHOW_ALL_TODOS_ACTION
     }
 }