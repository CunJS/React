import actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: [],
};
export default (state = defaultState, action) => {
  // reducer 可以接受state，但是绝不能修改state
  // 深拷贝
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case actionTypes.CHANGE_INPUT_VLAUE:
      newState.inputValue = action.value;
      break;
    case actionTypes.BTN_CLICK:
      newState.list.push(action.value);
      newState.inputValue = '';
      break;
    case actionTypes.LIST_DEL:
      newState.list.splice(action.index, 1);
      break;
    case actionTypes.GET_LIST:
      newState.list = action.data;
      break;
    default:
      break;
  }
  return newState;
};
