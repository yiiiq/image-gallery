import { call, fork, put, take } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStat, setImageStat, setImageStatError } from '../actions';

function* handleStatsRequest(id) {
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStat(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStat(id, res.downloads.total));
            return true;
        } catch (error) {}
    }
    yield put(setImageStatError(id));
}

export default function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}
