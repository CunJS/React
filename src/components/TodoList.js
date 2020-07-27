import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    // 继承父类
    super(props);
    // this.delList = this.delList.bind(this);
    this.state = {
      inputValue: '',
      list: [],
    };
  }
  render() {
    const listItem = this.state.list.map((item, index) => {
      return (
        <TodoItem key={index} item={item} index={index} delList={() => this.delList()} />
      );
    })
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入内容</label>
          {/*注释 className == class*/}
          <input id="inputArea" className="demoInput" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button id="btn" onClick={this.pushList}>
            提交
          </button>
        </div>
        {/* <ul>
          {this.state.list.map((item, index) => {
            // return <li key={index} onClick={this.delList} data-index={index} dangerouslySetInnerHTML={{ __html: item }}></li>;
            return <li key={index} onClick={() => this.delList(index)} dangerouslySetInnerHTML={{ __html: item }}></li>;
          })}
        </ul> */}
        <ul>
          {listItem}
        </ul>
      </Fragment>
    );
  }
  handleChange = e => {
    this.setState((e) => {
      debugger
      return {
        inputValue: e.target.value,
      }
    });
  };
  pushList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  };
  //Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
  delList  (index)  {
    // let index = e.target.attributes['data-index'].value;
    // 不推荐的写法this.state.list.splice(index, 1)
    console.log('start');
    let list = [...this.state.list];
    list.splice(index, 1);
    // this.setState((state, props) => {
    //   debugger
    //   return {
    //     list:list
    //   }
    // });
    this.setState({
      list
    });
  }
  // delList = (index) => {
  //   debugger
  //   let list = [...this.state.list];
  //   list.splice(index, 1);
  //   this.setState({
  //     list: list,
  //   });
  // };
}
export default TodoList;
