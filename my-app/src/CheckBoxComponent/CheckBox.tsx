import * as React from 'react';
import './CheckBox.css';
import { TODO_STATE } from 'src/redux/reducers/todosReducerWithComposition';

export interface Props{
    onCheck: (id: number) => void; 
    todoObject: TODO_STATE; 
}

export function CheckBox(props: Props){

    const isTicked: object | undefined = 
    !props.todoObject.completed ? undefined :
    {
        border: "1px solid lime",
        backgroundImage: `url(${require("./check-tick.png")})`,
        backgroundSize: "100% 100%"
    }; 

    return (
        <div className="checkbox_wrapper">
            <label>  
                <input id="checkbox" type="checkbox" name="isTodoDone" value="todo" onClick={()=>{
                    props.onCheck(props.todoObject.id); 
                }} />
                <div className="tick_box_custom" style={isTicked}> 
                </div> 
            </label>
        </div> 
    )
}