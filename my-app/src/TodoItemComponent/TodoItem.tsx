import * as React from 'react';
import { TODO_STATE } from 'src/redux/reducers/todosReducerWithComposition';
import { CheckBox } from 'src/CheckBoxComponent/CheckBox';
import {DeleteListItem} from "../DeleteListItemComponent/DeleteListItem";
import '../TodoItemComponent/TodoList.css';



interface Props{
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void;
    todo: TODO_STATE 
}

export default function TodoItem(props: Props){

    return (
        (<div className="todo"> 
            <CheckBox onCheck={props.onCheck} id={props.todo.id} />
            <h3 style={{textDecoration: props.todo.completed ? "line-through" : "none"}} >
                {props.todo.id + " : " + props.todo.text.substring(0, 45) + ".."}
            </h3>
            <DeleteListItem id={props.todo.id} onDelete={props.onDelete} />
        </div>)
    )

}