import * as React from 'react';
import { TODO_STATE } from 'src/redux/reducers/todosReducerWithComposition';
import { CheckBox } from 'src/CheckBoxComponent/CheckBox';
import {DeleteListItem} from "../DeleteListItemComponent/DeleteListItem";
import '../TodoListComponent/TodoList.css';
import TodoTextComponent from 'src/TodoTextComponent/TodoTextComponent';
import TodoItemDate from 'src/TodoItemDateComponent/TodoItemDateComponent';



interface Props{
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void;
    todo: TODO_STATE 
}

export default function TodoItem(props: Props){

    return (
        (<div className="todo_container"> 

             <TodoItemDate todoObject={props.todo}/> 

            <div className="todo_content_wrapper"> 
                <CheckBox onCheck={props.onCheck} id={props.todo.id} />
                <TodoTextComponent todoObject={props.todo}/> 
                <DeleteListItem id={props.todo.id} onDelete={props.onDelete} />
                {/* <div style={{clear: "both"}} /> */}
            </div> 
            
        </div>)
    )
}