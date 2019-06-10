import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_Hook';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { rootStore } from './store';

ReactDOM.render(
  <Provider store={rootStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
