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
  initialCapturedMouseYPosition: number | undefined
}

class App extends React.Component<Props, State> {

  constructor(props: Props){
    super(props); 
    console.log("PROPS");
    console.log(props); 

    this.state = {
      dragOffSetValue: 0,
      isCurrentlyDragging: false, 
      initialCapturedMouseYPosition: undefined
    }

    this.onMouseDown = this.onMouseDown.bind(this); 
    this.onMouseMove = this.onMouseMove.bind(this); 
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  private onMouseDown(e: React.MouseEvent<HTMLSpanElement>): void{
    if(!this.state.isCurrentlyDragging){

      console.log("e.pageY from mouse down", e.pageY); 
      this.setState({
            isCurrentlyDragging: true,
            initialCapturedMouseYPosition: this.state.initialCapturedMouseYPosition || e.pageY
          })
    }

    // could be document?
    window.addEventListener("mouseup", this.onMouseUp); 
    window.addEventListener("mousemove", this.onMouseMove); 
  }

  private onMouseMove(e: any): void{
    if(this.state.isCurrentlyDragging){

      // console.log("init mouse y pos from mouse move", (this.state.initialCapturedMouseYPosition as number)); 
      // console.log("e.pageY from mouse move", e.pageY); 


      // console.log(e.pageY - (this.state.initialCapturedMouseYPosition as number)); 
      this.setState({
        dragOffSetValue: e.pageY - (this.state.initialCapturedMouseYPosition as number)
      })
    }
  }

  private onMouseUp(e: any): void{
      this.setState({
        isCurrentlyDragging: false,
        // initialCapturedMouseYPosition: 0,
      })

      window.removeEventListener("mousemove", this.onMouseMove); 
      window.removeEventListener("mouseup", this.onMouseUp); 
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

        <span id="drag-area" onMouseDown={this.onMouseDown}> 
          <img src={require("./drag_icon.png")} id="drag_icon_image"/>
          <div style={{clear: "both"}} />
        </span>
          
      </div>
    );
  }
}

export default App;





