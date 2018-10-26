import { TODOS_ARRAY } from "src/redux/reducers/todosReducerWithComposition";
import * as React from 'react';



interface Props{
    onShowAll: () => void; 
    onShowActive: () => void; 
    onShowDone: () => void; 
    todoArray: TODOS_ARRAY;
}

// container component
class NavContainerComponent extends React.Component<Props, {}> {

    constructor(props: Props){
        super(props); 
    }

    public render(){

        return (
            <div id="nav_container"> 
              
            </div>
        )
    }
}