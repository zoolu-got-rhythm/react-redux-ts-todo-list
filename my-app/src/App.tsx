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
  isCurrentlyDragging: boolean
}

class App extends React.Component<Props, {}> {

  constructor(props: Props){
    super(props); 
    console.log("PROPS");
    console.log(props); 
  }

  public render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title"> todo list widget <span id="unicode-icon"> ✎ </span> </h1>
        </header>
        
        <Provider store={store}>
          <TodoList /> 
        </Provider>

        <Provider store={store}>
          <NavContainerComponent />
        </Provider>

        <span onClick={}> 
        
        </span>
          
      </div>
    );
  }
}

export default App;





