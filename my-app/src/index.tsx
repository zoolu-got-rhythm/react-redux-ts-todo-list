import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './redux/containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './redux/store';
import { Provider } from 'react-redux';


export const store = configureStore(); 

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
