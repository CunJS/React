import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
// import App from './App';
import TodoList from './components/TodoList';
// import 'antd/dist/antd.css';

if (process.env.NODE_ENV === "development") {
  require('./mock/index.js');
}

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);

