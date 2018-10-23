import configureStore from './store';
import { addTodoActionHelper } from './actions/todos';

const store = configureStore(); 
console.log(store.getState()); 

store.dispatch(addTodoActionHelper("sdfsdf")); 

console.log(store.getState().todosReducer.todosArray); 
