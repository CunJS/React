import React, { Component, Fragment } from 'react';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="inputArea">输入内容</label>
          {/*注释 className == class*/}
          <input id="inputArea" className="demoInput" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button id="btn" onClick={this.pushList}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.delList(index)} dangerouslySetInnerHTML={{ __html: item }}>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  pushList = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  };
  //Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.
  delList = index => () => {
    // 不推荐的写法this.state.list.splice(index, 1)
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  };
}
export default TodoList;
