import { takeEvery } from 'redux-saga/effects';

function* workereSaga() {
    console.log('Hey ');
}
function* rootSaga() {
    yield takeEvery('HELLO', workereSaga);
}
export default rootSaga;
