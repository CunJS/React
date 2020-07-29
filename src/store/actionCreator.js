import actionTypes from './actionTypes'

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
  })
}

export default actionCreator;