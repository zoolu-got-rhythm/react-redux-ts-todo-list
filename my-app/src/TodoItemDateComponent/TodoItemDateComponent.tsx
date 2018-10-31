import { TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import './DateComponent.css'; 
import * as React from 'react';
import dd from '../utils/dateSingleDigitFormatter'; 

interface Props{
    todoObject: TODO_STATE; 
}

export default function TodoItemDate(props: Props){

    return (
        <div className="time-wrapper"> 
            <span className="todo-time-information"> 
                {"#" + props.todoObject.id + " " + dd(props.todoObject.date.getHours()) + ":" + 
                dd(props.todoObject.date.getMinutes()) + ":" +
                dd(props.todoObject.date.getSeconds())}  
                {props.todoObject.date.getHours() as number < 12 ? "am " : "pm " }
                {dd(props.todoObject.date.getUTCDate()) + "/" +
                dd(props.todoObject.date.getMonth()) + "/" +
                dd(props.todoObject.date.getFullYear())}
            </span> 

            <span className="todo-character-count"> 
                characters: {dd(props.todoObject.text.length)}
            </span> 
        </div>
    )    
}