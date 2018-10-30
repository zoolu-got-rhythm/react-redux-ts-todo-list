import * as React from 'react';
import { TODO_STATE } from 'src/redux/reducers/todosReducerWithComposition';
import { CheckBox } from 'src/CheckBoxComponent/CheckBox';
import {DeleteListItem} from "../DeleteListItemComponent/DeleteListItem";
import './TodoItem.css';
import TodoTextComponent from 'src/TodoTextComponent/TodoTextComponent';
import TodoItemDate from 'src/TodoItemDateComponent/TodoItemDateComponent';



interface Props{
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void;
    onEdit: (id: number, text: string) => void; 
    todo: TODO_STATE 
}

export default function TodoItem(props: Props){

    return (
        (<div className="todo_container"> 

             <TodoItemDate todoObject={props.todo}/> 

            <div className="todo_content_wrapper"> 
                <CheckBox onCheck={props.onCheck} todoObject={props.todo} />
                <TodoTextComponent todoObject={props.todo} onEdit={props.onEdit}/> 
                <DeleteListItem id={props.todo.id} onDelete={props.onDelete} />
                {/* <div style={{clear: "both"}} /> */}
            </div> 
            
        </div>)
    )
}