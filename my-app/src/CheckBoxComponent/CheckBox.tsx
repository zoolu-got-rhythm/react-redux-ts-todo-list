import * as React from 'react';

export interface Props{
    onCheck: (id: number) => void; 
    id: number; 
}

export function CheckBox(props: Props){
    return (
        <input type="checkbox" name="isTodoDone" value="todo" onClick={()=>{
            props.onCheck(props.id); 
        }} />
    )
}