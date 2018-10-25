import { TODOS_ARRAY, TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import * as React from 'react';
import { rootState } from 'src/redux/store';
import { todo_actions } from 'src/redux/actions/todos';
import { Dispatch } from 'redux';
import * as actions from '../redux/actions/todos'
import { connect } from 'react-redux';
import TodoItem from 'src/TodoItemComponent/TodoItem';

interface TodoListProps {
    todoArray: TODOS_ARRAY
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void; 
  }
  
// container component
class TodoList extends React.Component<TodoListProps, {}> {

    constructor(props: TodoListProps){
        super(props); 
    }

    public render(){

        const todoArrayReversed: TODOS_ARRAY = this.props.todoArray; // .reverse() 
        return (
            <div className="todos_container"> 
                {todoArrayReversed.map((todo: TODO_STATE) => {                           
                    return <TodoItem onCheck={this.props.onCheck} onDelete={this.props.onDelete} todo={todo}/>
                })}
            </div>
        )
    }
}

export function mapStateToProps(state: rootState) {
    return {
      todoArray: state.todosReducer.todosArray
    }
}

export function mapDispatchToProps(dispatch: Dispatch<todo_actions>) {
    return {
      onCheck: (id: number) => dispatch(actions.toggleTodoActionHelper(id)),
      onDelete: (id: number) => dispatch(actions.deleteTodoActionHelper(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

