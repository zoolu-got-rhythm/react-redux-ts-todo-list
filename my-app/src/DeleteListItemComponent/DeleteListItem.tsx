import * as React from "react";
import './DeleteListItem.css';


export interface Props{
    id: number;
    onDelete: (id: number) => void;
}

export function DeleteListItem(props: Props){

    function checkUserWantsToDelete(){
        let result: boolean = confirm("are you sure you " +
            "want to delete this todo?");
        if(result)
            props.onDelete(props.id);
    }

    return (
        <div className="bin_wrapper"> 
            <button onClick={checkUserWantsToDelete}>
                <img id="bin" src={require("./bin-icon.png")} />
            </button>
        </div> 
    )
}