import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './basic/counter';
import register, { registerSaga } from './auth/register';
import login, { loginSaga } from './auth/login';
import list, { listSaga } from './board/list';
import write, { writeSaga } from './board/write';
import {HYDRATE} from "next-redux-wrapper"
const rootReducer = combineReducers({
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    counter,
    login,
    register,
    list,
    write
});
export function* rootSaga() {
  yield all([counterSaga(), registerSaga(), loginSaga(), listSaga(), writeSaga()]);
}

export default rootReducer;