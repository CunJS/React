import actionTypes from './actionTypes'
import axios from "axios";

const actionCreator = {
  getInputChangeAction: (val) => ({
    type: actionTypes.CHANGE_INPUT_VLAUE,
    value: val
  }),
  btnClickAction: (val) => ({
    type: actionTypes.BTN_CLICK,
    value: val
  }),
  listDelAction: (val) => ({
    type: actionTypes.LIST_DEL,
    index: val
  }),
  getListDataAction: (data) => ({
    type: actionTypes.GET_LIST,
    data
  }),
  getTodoList: () => {
    return (dispatch) => {
      axios({
        url: '/mail/list',
        type: "get"
      }).then(res =>{
        if (res.status === 200) {
          let list = res.data.data;
          dispatch(actionCreator.getListDataAction(list));
        }
      })
    }
  }
}

export default actionCreator;