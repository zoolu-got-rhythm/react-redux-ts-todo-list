import * as React from 'react';
import './App.css';

import { TODOS_ARRAY, TODO_STATE } from './redux/reducers/todosReducerWithComposition';

// import { Provider } from 'react-redux';

// class App extends React.Component {
//   public render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.tsx</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }




// interface State {
  
// }


interface TodoListProps {
  todoArray: TODOS_ARRAY
}

function TodoList(props: TodoListProps){
  return (
    <ul> 
      {props.todoArray.map((todo: TODO_STATE) => {
        return <li> {todo.id + " : " + todo.text + ".. status: " + todo.completed} </li> 
      })} 
    </ul>
  )
}

// interface State {}

interface Props {
  addNewTodo: (text: string) => void; 
  todosArray: TODOS_ARRAY; 
}

class App extends React.Component<Props, {}> {

  constructor(props: Props){
    super(props); 
    this.displayAlertBoxToAddNewTodo = this.displayAlertBoxToAddNewTodo.bind(this); 
    console.log("PROPS"); 
    console.log(props); 
  }

  public displayAlertBoxToAddNewTodo(): void{
    let val: any = window.prompt("add todo description"); 
    if(typeof val === "number")
        val = val.toString() as string; 

    // dispatch action with val to redux store
    this.props.addNewTodo(val); 
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">++
          <h1 className="App-title"> todo list experiment </h1>
          <button onClick={this.displayAlertBoxToAddNewTodo}> add new todo </button> 
        </header>
        <TodoList todoArray={this.props.todosArray}/> 
      </div>
    );
  }
}

export default App;





