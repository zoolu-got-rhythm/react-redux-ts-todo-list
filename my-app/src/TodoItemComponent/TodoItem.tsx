import * as React from 'react';
import { TODO_STATE } from 'src/redux/reducers/todosReducerWithComposition';
import { CheckBox } from 'src/CheckBoxComponent/CheckBox';


interface Props{
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void;
    todo: TODO_STATE 
}

export default function TodoItem(props: Props){

    return (
        (<div className="todo"> 
            <CheckBox onCheck={props.onCheck} id={props.todo.id}/>
            {props.todo.id + " : " + props.todo.text + ".. status: " + props.todo.completed} 
        </div>)
    )

}