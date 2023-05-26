import { takeLatest, call, put } from "redux-saga/effects"
import * as action from "./action";
import * as api from '../../api/roomapi';

function* fetchRoomSaga(action){
    const rooms = yield  call(api.fetchRoom);
    console.log('[rooms]',rooms);
    yield put(action.getRoom.getRoomSuccess(rooms));
}

export default function* roomListSaga() {
    yield takeLatest(action.getRoom.getRoomRequest, fetchRoomSaga)

}