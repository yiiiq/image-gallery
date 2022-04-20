import { takeEvery, put } from 'redux-saga/effects';
import { IMAGES } from '../constants';

function* handleImagesLoad() {
    console.log('fetching images from unsplash');
}
function* byeSaga() {
    console.log('bye bye');
}
function* rootSaga() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
export default rootSaga;
