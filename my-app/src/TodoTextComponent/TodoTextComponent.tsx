import { TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import * as React from 'react';
import './TodoTextComponent.css'; 

interface Props{
    todoObject: TODO_STATE;  
}

interface State{
    textState: string; 
    editMode: boolean; 
    textInEdit: string; 
}


class TodoTextComponent extends React.Component<Props, State>{
    constructor(props: Props){
        super(props); 
        this.state = {
            textState: "",
            editMode: false,
            textInEdit: props.todoObject.text
        }
        this.setEditMode = this.setEditMode.bind(this); 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        // console.log(this.state); 
    }

    private setEditMode(bool: boolean): void{
        this.setState({
            editMode: bool
        })
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

    private handleChange(event: any): void {
        this.setState({textInEdit: event.target.value});
      }

    private handleSubmit(event: any) {
    // dispatch action/call callback that handles dispatch of action
        if(event.keyCode === 13)
            this.setEditMode(false); 
    }

    componentDidMount(){
        // this.setState({textState: ""})
        this.textRollAnimate(35); 
    }

    public render(){
        const textTitleOrEditElement = !this.state.editMode ? 
        <h3 onClick={()=>this.setEditMode(true)} className="todo-header-text"
        style={{textDecoration: this.props.todoObject.completed ? "line-through" : "none"}} >
            {this.state.textState}
        </h3> : <input className="edit-todo" onChange={this.handleChange}
        type="text" value={this.state.textInEdit} onKeyDown={this.handleSubmit} />; 
        return (
            <div className="todo_text_wrapper"> 
                {textTitleOrEditElement}
            </div> 
        )
    }
}

export default TodoTextComponent; 