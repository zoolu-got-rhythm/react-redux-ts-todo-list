import {combineReducers, createStore, Reducer, AnyAction} from "redux";
import todosReducer, { TODOS_STATE } from "./reducers/todosReducerWithComposition";
import filterTodos, {FILTER_TODOS_STATE_SHAPE} from "./reducers/filterTodosReducer";

export type rootState = {
    todosReducer: TODOS_STATE,
    filterTodosReducer: FILTER_TODOS_STATE_SHAPE
}

const rootReducer: Reducer<rootState, AnyAction> = combineReducers({
    todosReducer,
    filterTodosReducer: filterTodos
});

function configureStore() {
    return createStore(
        rootReducer
    )
}

export default configureStore;