import React from 'react';
import { Input, Button, List } from 'antd';


// 函数组件（无状态组件）
function TodoListUI(props) {
  return (
    <div>
      <Input placeholder="todo info" value={props.inputValue} style={{ width: 300 }} onChange={props.handleInputChange}></Input>
      <Button type="primary" onClick={props.handleClick}>
        提交
      </Button>
      <List bordered dataSource={props.list} renderItem={(item, index) => <List.Item onClick={() => props.handleDel(index)}>{item.key}</List.Item>} />
    </div>
  );
}

export default TodoListUI;
