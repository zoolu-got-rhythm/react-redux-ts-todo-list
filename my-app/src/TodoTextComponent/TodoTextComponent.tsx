import { TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import * as React from 'react';
import './TodoTextComponent.css'; 

interface Props{
    todoObject: TODO_STATE;  
}

interface State{
    textState: string; 
}


class TodoTextComponent extends React.Component<Props, State>{
    constructor(props: Props){
        super(props); 
        this.state = {
            textState: ""
        }
        // console.log(this.state); 
    }

    private textRollAnimate = (textCutOffPoint: number): void => {
        let count: number = 0; 
        let dotsAdded: number = 0; 
        let timerId = window.setInterval(() => {
            count++; 

            if(count >= (textCutOffPoint - 2)){
                dotsAdded++; 
                this.setState({
                    textState: this.state.textState + "."
                })
                if(dotsAdded == 2){
                    window.clearInterval(timerId); 
                }
            }else{
                this.setState({
                    textState: this.props.todoObject.text.substring(0, count)
                })
            }

            if(count == this.props.todoObject.text.length){
                window.clearInterval(timerId);
                // return? 
            }
                
            if(count == textCutOffPoint){
                window.clearInterval(timerId); 
            }
        }, 1000 / 55); 
    }

    componentDidMount(){
        // this.setState({textState: ""})
        this.textRollAnimate(35); 
    }

    public render(){
        return (
            <div className="todo_text_wrapper"> 
                <h3 style={{textDecoration: this.props.todoObject.completed ? "line-through" : "none"}} >
                {this.props.todoObject.id + " : " + this.state.textState}
                </h3>   
            </div> 
        )
    }
}

export default TodoTextComponent; 