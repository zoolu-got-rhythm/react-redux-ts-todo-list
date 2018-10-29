import * as React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import * as filterTodoactions from "../redux/actions/todoFilters";
import {todo_filter_actions} from "../redux/actions/todoFilters";
import  * as todoActions from "../redux/actions/todos";
import {rootState} from "../redux/store";
import {FilterType} from "../redux/reducers/filterTodosReducer";
// import {FilterType} from "../redux/reducers/filterTodosReducer";
import "./NavContainerComponent.css";

interface Props{
    onShowAll: () => void; 
    onShowActive: () => void; 
    onShowDone: () => void;
    addNewTodo: (text: string) => void;
    todoFilter: FilterType;

}

// container component
class NavContainerComponent extends React.Component<Props, {}> {

    constructor(props: Props){
        super(props);
        this.displayAlertBoxToAddNewTodo = this.displayAlertBoxToAddNewTodo.bind(this);
    }

    public displayAlertBoxToAddNewTodo(): void{
        let val: any = window.prompt("add todo description");
        if(typeof val === "number")
            val = val.toString() as string;

        // dispatch action with val to redux store
        this.props.addNewTodo(val);

    }

    private checkFilterTypeIsAMatch(filterType: FilterType): boolean{
        return filterType == this.props.todoFilter;
    }

    public render(){
        return (
            <div id="nav_container">
                <button onClick={this.props.onShowAll}
                    style={{background: this.checkFilterTypeIsAMatch(FilterType.ALL) ? "lime" : "none"}}>
                    show all
                </button>

                <button
                    onClick={this.props.onShowActive}
                    style={{background: this.checkFilterTypeIsAMatch(FilterType.ACTIVE) ? "lime" : "none"}}>
                    show active
                </button>

                <button onClick={this.props.onShowDone}
                        style={{background: this.checkFilterTypeIsAMatch(FilterType.COMPLETED) ? "lime" : "none"}}>
                    show done
                </button>

                <button onClick={this.displayAlertBoxToAddNewTodo}>
                    <img id="create-todo-image" src={require("./write_note_icon.png")} />
                </button>
            </div>
        )
    }
}

export function mapStateToProps(state: rootState) {
    return {
        todoFilter: state.filterTodosReducer.filterType
    }
}

export function mapDispatchToProps(dispatch: Dispatch<todo_filter_actions>) {
    return {
        onShowAll: () => dispatch(filterTodoactions.showAllTodosActionHelper()),
        onShowActive: () => dispatch(filterTodoactions.showAllActiveTodosActionHelper()),
        onShowDone: () => dispatch(filterTodoactions.showAllTodosCompletedActionHelper()),
        addNewTodo: (text: string) => dispatch(todoActions.addTodoActionHelper(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainerComponent);




