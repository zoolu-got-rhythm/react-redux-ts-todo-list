import { TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import './DateComponent.css'; 
import * as React from 'react';

interface Props{
    todoObject: TODO_STATE; 
}

export default function TodoItemDate(props: Props){
    return (
        <div className="time-wrapper"> 
                {"#" + props.todoObject.id + ":    " + props.todoObject.date.getHours() + ":" + 
                props.todoObject.date.getMinutes() + ":" +
                props.todoObject.date.getSeconds()}
            </div>
    )    
}