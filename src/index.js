import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


import {createStore} from 'redux';
import {stateCategory} from './store/store';
import {Provider} from 'react-redux';


const store = createStore(stateCategory);

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root')
);


