import {todo_filter_actions} from "../actions/todoFilters";
import * as todoFilterActions from "../types/todoFilters";


export enum FilterType{
    ALL,
    COMPLETED,
    ACTIVE
}

export interface FILTER_TODOS_STATE_SHAPE {
    filterType: FilterType;
}

const filterTodos = (state: FILTER_TODOS_STATE_SHAPE = {filterType: FilterType.ALL}, action: todo_filter_actions): FILTER_TODOS_STATE_SHAPE => {
    switch (action.type) {
        case todoFilterActions.SHOW_ALL_TODOS_ACTION:
            return {
                filterType: FilterType.ALL
            };
        case todoFilterActions.SHOW_ALL_COMPLETED_TODOS_ACTION:
            return {
                filterType: FilterType.COMPLETED
            };
        case todoFilterActions.SHOW_ALL_ACTIVE_TODOS_ACTION:
            return {
                filterType: FilterType.ACTIVE
            };
        default:
            return state;
    }


} ;

export default filterTodos;