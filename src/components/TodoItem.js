import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    return <li onClick={this.handleClick}>{this.state.item}</li>;
  }
  handleClick = () => {
    debugger
    this.props.delList(this.props.index);
  }
}

export default TodoItem;
