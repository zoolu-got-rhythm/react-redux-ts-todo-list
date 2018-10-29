import { TODOS_ARRAY, TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import * as React from 'react';
import { rootState } from 'src/redux/store';
import { todo_actions } from 'src/redux/actions/todos';
import { Dispatch } from 'redux';
import * as actions from '../redux/actions/todos'
import { connect } from 'react-redux';
import TodoItem from 'src/TodoItemComponent/TodoItem';
import './TodoList.css';
import {FilterType} from "../redux/reducers/filterTodosReducer";

interface TodoListProps {
    todoArray: TODOS_ARRAY
    filterTodosType: FilterType
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void; 
  }
  
// container component
class TodoList extends React.Component<TodoListProps, {}> {

    constructor(props: TodoListProps){
        super(props); 
    }

    public render(){

        let todosArray: TODOS_ARRAY = [];
        if(this.props.filterTodosType == FilterType.ACTIVE){
            todosArray = this.props.todoArray.filter((todo: TODO_STATE) => {
                return !todo.completed;
            })
        }else if(this.props.filterTodosType == FilterType.COMPLETED){
            todosArray = this.props.todoArray.filter((todo: TODO_STATE) => {
                return todo.completed;
            })
        }else{
            todosArray = this.props.todoArray;
        }


        return (
            <div className="todos_container"> 
                {todosArray.map((todo: TODO_STATE) => {
                    return <TodoItem onCheck={this.props.onCheck} onDelete={this.props.onDelete} todo={todo}/>
                })}
            </div>
        )
    }
}

export function mapStateToProps(state: rootState) {
    return {
      todoArray: state.todosReducer.todosArray,
        filterTodosType: state.filterTodosReducer.filterType
    }
}

export function mapDispatchToProps(dispatch: Dispatch<todo_actions>) {
    return {
      onCheck: (id: number) => dispatch(actions.toggleTodoActionHelper(id)),
      onDelete: (id: number) => dispatch(actions.deleteTodoActionHelper(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

