import React from 'react';
import store from '../store/index';
import actionCreator from '../store/actionCreator';
import TodoListUI from './TodoListUI';
import axios from "axios";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅store
    store.subscribe(() => this.handleStoreChange());
  }

  componentDidMount() {
    axios({
      url: '/mail/list',
      type: "get"
    }).then(res =>{
      if (res.status === 200) {
        let list = res.data.data;
        store.dispatch(actionCreator.getListDataAction(list));
      }
    })
  }

  handleStoreChange() {
    // 更新state
    this.setState(store.getState());
  }
  handleInputChange(e) {
    let val = e.target.value;
    store.dispatch(actionCreator.getInputChangeAction(val));
  }
  handleClick() {
    store.dispatch(actionCreator.btnClickAction(this.state.inputValue));
  }
  handleDel(index) {
    store.dispatch(actionCreator.listDelAction(index));
  }
  render() {
    return <TodoListUI inputValue={this.state.inputValue} list={this.state.list} handleDel={index => this.handleDel(index)} handleInputChange={e => this.handleInputChange(e)} handleClick={() => this.handleClick()} />;
  }
}

export default TodoList;
