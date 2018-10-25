import * as React from 'react';
import './CheckBox.css';

export interface Props{
    onCheck: (id: number) => void; 
    id: number; 
}

export function CheckBox(props: Props){
    return (
        <input id="checkbox" type="checkbox" name="isTodoDone" value="todo" onClick={()=>{
            props.onCheck(props.id); 
        }} />
    )
}