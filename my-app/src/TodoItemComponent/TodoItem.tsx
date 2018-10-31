import * as React from 'react';
import { TODO_STATE } from 'src/redux/reducers/todosReducerWithComposition';
import { CheckBox } from 'src/CheckBoxComponent/CheckBox';
import {DeleteListItem} from "../DeleteListItemComponent/DeleteListItem";
import './TodoItem.css';
import TodoTextComponent from 'src/TodoTextComponent/TodoTextComponent';
import TodoItemDate from 'src/TodoItemDateComponent/TodoItemDateComponent';



interface Props{
    onCheck: (id: number) => void; 
    onDelete: (id: number) => void;
    onEdit: (id: number, text: string) => void; 
    todo: TODO_STATE 
}

interface State{
    todoIsExpanded: boolean; 
}

class TodoItem extends React.Component<Props, State>{
    constructor(props: Props){
        super(props); 
        this.state = {
            todoIsExpanded: false
        }
        this.setTodoIsExpanded = this.setTodoIsExpanded.bind(this); 
    }

    private setTodoIsExpanded(bool: boolean): void{
        this.setState({todoIsExpanded: bool})
    }

    render(){
        // wrapper styles
        const isTodoWrapperExpandedStyles = {height: this.state.todoIsExpanded ? "100px": "40px"}; 

        return (
            (<div className="todo_container"> 
    
                 <TodoItemDate todoObject={this.props.todo}/> 
    
                <div className="todo_content_wrapper" style={isTodoWrapperExpandedStyles}> 
                    <CheckBox onCheck={this.props.onCheck} todoObject={this.props.todo} />
                    <TodoTextComponent todoObject={this.props.todo} onEdit={this.props.onEdit} 
                        expandWindow={this.setTodoIsExpanded}/> 
                    <DeleteListItem id={this.props.todo.id} onDelete={this.props.onDelete} />
                    {/* <div style={{clear: "both"}} /> */}
                </div> 
                
            </div>)
        )
    }
    
}

export default TodoItem; 