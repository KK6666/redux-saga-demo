import { put, takeEvery } from 'redux-saga/effects'
import { GET_LIST_SAGA } from './actionType'
import { getListAction } from './actionCreator'
import axios from 'axios'

//generator函数
function* mySaga() {
  //等待捕获action
  yield takeEvery(GET_LIST_SAGA, getList)
}

function* getList() {
  const res = yield axios.get(`http://yapi.smart-xwork.cn/mock/147723/getList`)
  const action = getListAction(res.data.data.list)
  yield put(action)
}

export default mySaga;