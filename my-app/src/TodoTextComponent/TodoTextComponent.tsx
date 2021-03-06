import { TODO_STATE } from "src/redux/reducers/todosReducerWithComposition";
import * as React from 'react';
import './TodoTextComponent.css'; 
import trimTitleOfTodoDown from 'src/utils/longTextTrimmer';

interface Props{
    todoObject: TODO_STATE;  
    onEdit: (id: number, text: string) => void;
    expandWindow: (bool: boolean) => void; 
}

interface State{
    textState: string; 
    editMode: boolean; 
    textInEdit: string; 
    cutOfCharacterPoint: number; 
}


class TodoTextComponent extends React.Component<Props, State>{
    constructor(props: Props){
        super(props); 
        this.state = {
            textState: "",
            editMode: false,
            textInEdit: props.todoObject.text, 

            cutOfCharacterPoint: 30
        }

        //@ts-ignore
        // this.textAreaRef = React.createRef(); 

        this.setEditMode = this.setEditMode.bind(this); 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        // console.log(this.state); 
    }

    private setEditMode(bool: boolean): void{
        this.setState({
            editMode: bool
        })

        this.props.expandWindow(bool); 
    }


    private textRollAnimate = (todoText: string): void => {
        let count: number = 0; 
        if(todoText.length == 0)
            return; 
        let timerId = window.setInterval(() => {
            count++; 

            this.setState({
                textState: todoText.substring(0, count)
            })
        
            if(count == todoText.length){
                window.clearInterval(timerId); 
            }
        }, 1000 / 55); 
    }

    

    private handleChange(event: any): void {
        this.setState({textInEdit: event.target.value});
    }

    private handleSubmit(event: any) {
    // dispatch action/call callback that handles dispatch of action
        if(event.keyCode === 13){
            this.setEditMode(false); 
            console.log(this.state.textInEdit); 
            this.props.onEdit(this.props.todoObject.id, this.state.textInEdit)
        }
    }

    componentDidUpdate(prevProps: Props): void {
        // Typical usage (don't forget to compare props):
        console.log(this.props.todoObject.id + " did update"); 
        if (this.props.todoObject.text !== prevProps.todoObject.text) {
          this.setState(
              {
                  textState:  trimTitleOfTodoDown(this.props.todoObject.text, this.state.cutOfCharacterPoint),
                  textInEdit: this.props.todoObject.text
             })
        }
      }

    componentDidMount(): void{
        // this.setState({textState: ""})

        let trimmedTextForTitle: string = trimTitleOfTodoDown(this.props.todoObject.text, this.state.cutOfCharacterPoint); 
        console.log(trimmedTextForTitle); 
        this.textRollAnimate(trimmedTextForTitle);
    }

    public render(){
        const textTitleOrEditElement = !this.state.editMode ? 
        <h3 className="todo-header-text"
        style={{textDecoration: this.props.todoObject.completed ? "line-through" : "none"}} >
            {this.state.textState}
        </h3> : <textarea autoFocus className="edit-todo" onChange={this.handleChange}
         value={this.state.textInEdit} onKeyDown={this.handleSubmit} />;

        return (
            <div className="todo_text_wrapper" onClick={()=>this.setEditMode(true)}> 
                {textTitleOrEditElement}
            </div> 
        )
    }
}

export default TodoTextComponent; 