import * as React from 'react';
import './App.css';

import { TODOS_ARRAY } from './redux/reducers/todosReducerWithComposition';
import TodoList from './TodoListComponent/TodoList';
import { Provider } from 'react-redux';
import { store } from 'src';
import NavContainerComponent from "./NavContainerComponent/NavContainerComponent";

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




// interface State {}

interface Props {
  todosArray: TODOS_ARRAY; 
}

interface State {
  dragOffSetValue: number,
  isCurrentlyDragging: boolean,
  initialCapturedMouseYPosition: number | null
}

class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props); 
    console.log("PROPS");
    console.log(props); 

    this.state = {
      dragOffSetValue: 0,
      isCurrentlyDragging: false, 
      initialCapturedMouseYPosition: null
    }

    this.onMouseDown = this.onMouseDown.bind(this); 
    this.onMouseMove = this.onMouseMove.bind(this); 
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  private onMouseDown(e: React.MouseEvent<HTMLSpanElement>): void{
    if(!this.state.isCurrentlyDragging){
      this.setState({
        isCurrentlyDragging: true,
        initialCapturedMouseYPosition: e.pageY,
        dragOffSetValue: 0
      })
    }

    // document.addEventListener




  }

  private onMouseMove(e: React.MouseEvent<HTMLSpanElement>): void{
    if(this.state.isCurrentlyDragging){
      this.setState({
        dragOffSetValue: e.pageY - (this.state.initialCapturedMouseYPosition as number)
      })
    }else{
      this.setState({
        dragOffSetValue: 0
      })
    }
  }

  private onMouseUp(e: React.MouseEvent<HTMLSpanElement>): void{
    if(this.state.isCurrentlyDragging){
      this.setState({
        isCurrentlyDragging: false,
        initialCapturedMouseYPosition: null,
      })
    }
  }

  public render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title"> todo list widget <span id="unicode-icon"> ✎ </span> </h1>
        </header>
        
        <Provider store={store}>
          <TodoList dragOffSetValue={this.state.dragOffSetValue} /> 
        </Provider>

        <Provider store={store}>
          <NavContainerComponent />
        </Provider>

        <span id="drag-area" onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}> 
           - - - - - - - - -
        </span>
          
      </div>
    );
  }
}

export default App;





