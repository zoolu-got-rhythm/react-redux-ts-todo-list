"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var todosReducerWithComposition_1 = require("./reducers/todosReducerWithComposition");
var rootReducer = redux_1.combineReducers({
    todosReducer: todosReducerWithComposition_1["default"]
});
function configureStore() {
    return redux_1.createStore(rootReducer);
}
exports["default"] = configureStore;
