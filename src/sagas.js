// export function* helloSaga() {
//     yield console.log("hello saga !");
// }

import { put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

export function* removeTodoAsync(info) {
  yield call(delay, 1000);
  yield put({ type: 'REMOVE_TODO', text: "", id: info.id });
}

export default function* rootSaga() {
  yield takeEvery('REMOVE_TODO_ASYNC', removeTodoAsync);
}