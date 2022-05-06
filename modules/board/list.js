import {createAction, handleActions} from 'redux-actions';
import {call, put, takeLatest} from 'redux-saga/effects'

import axios  from 'axios';
import {SEVER, headers} from "@/modules/board/server"

export const initialState = {
    isList: false
}

const LIST_REQUEST = 'board/LIST_REQUEST';
const LIST_SUCCESS = 'board/LIST_SUCCESS';
const LIST_FAILURE = 'board/LIST_FAILURE';

export const listRequest = createAction(LIST_REQUEST, data=>data)
export function* listSaga() {
    yield takeLatest(LIST_REQUEST, list);
}

function* list(action) {
    try {
        console.log(" **** 여기가 핵심 *** "+JSON.stringify(action))
        const response = yield call(listAPI, action.payload)
        console.log(" list 서버다녀옴: " + JSON.stringify(response.data))
        yield put({type: LIST_SUCCESS, payload: response.data})
        yield put((window.location.href = "/board/list"));
    } catch (error) {
        yield put({type: LIST_FAILURE, payload: error.message})
    }
}
const listAPI = payload => axios.post(
    `${SERVER}/board/list`,
    payload,
    {headers}
)

export default list