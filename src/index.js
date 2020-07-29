import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './components/TodoList';
import 'antd/dist/antd.css';

if (process.env.NODE_ENV === "development") {
  require('./mock/index.js');
}

ReactDOM.render(
    <TodoList />,
  document.getElementById('root')
);

