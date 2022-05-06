import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects'

import axios  from 'axios';
import {SEVER, headers} from "@/modules/board/server"

export const initialState = {
    isWritten: false
}

const WRITE_REQUEST = 'board/WRITE_REQUEST';
const WRITE_SUCCESS = 'board/WRITE_SUCCESS';
const WRITE_FAILURE = 'board/WRITE_FAILURE';

export const writeRequest = createAction(WRITE_REQUEST, data=>data)
export function* writeSaga() {
    yield takeLatest(WRITE_REQUEST, write);
}

function* write(action) {
    try {
        console.log(" **** 여기가 핵심 *** "+JSON.stringify(action))
        const response = yield call(writeAPI, action.payload)
        console.log(" write 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: WRITE_SUCCESS, payload: response.data})
        yield put((window.location.href = "/board/write"));
    } catch (error) {
        yield put({type: WRITE_FAILURE, payload: error.message})
    }
}
const writeAPI = payload => axios.post(
    `${SERVER}/board/write`,
    payload,
    {headers}
)

export default write

