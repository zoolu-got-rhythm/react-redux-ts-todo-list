import * as React from 'react';
import './CheckBox.css';

export interface Props{
    onCheck: (id: number) => void; 
    id: number; 
}

export function CheckBox(props: Props){
    return (
        <div className="checkbox_wrapper">
            <label>  
                <input id="checkbox" type="checkbox" name="isTodoDone" value="todo" onClick={()=>{
                    props.onCheck(props.id); 
                }} />
                <div className="tick_box_custom"> </div> 
            </label>
        </div> 
    )
}