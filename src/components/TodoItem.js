import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    return <li onClick={this.props.delList}>{this.state.item}</li>;
  }
}

export default TodoItem;
