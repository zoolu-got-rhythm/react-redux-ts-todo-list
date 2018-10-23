import {combineReducers, createStore, Reducer, AnyAction} from "redux";
import todosReducer, { TODOS_STATE } from "./reducers/todosReducerWithComposition";

export type rootState = {
    todosReducer: TODOS_STATE
}

const rootReducer: Reducer<rootState, AnyAction> = combineReducers({
    todosReducer
});

function configureStore() {
    return createStore(
        rootReducer,
    )
}

export default configureStore;