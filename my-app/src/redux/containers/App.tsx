import * as actions from '../actions/todos';
// import { TODOS_STATE } from '../reducers/todosReducerWithComposition';
import { Dispatch } from 'redux';
import App from 'src/App';
import { connect } from 'react-redux';
import { rootState } from '../store';

// TODOS_ARRAY

// reducer: Reducer<>

export function mapStateToProps(state: rootState) {
    return {
      todosArray: state.todosReducer.todosArray
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.todo_actions>) {
    return {
      addNewTodo: (todoText: string) => dispatch(actions.addTodoActionHelper(todoText)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);