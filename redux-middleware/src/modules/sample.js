import * as api from '../lib/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { startLoading, finishLoading } from './loading';
// import createRequestThunk from '../lib/createRequestThunk';


// action type
// 한 요청당 세개를 만들어야 합니다.
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

export const getPost = id => ({
    type: GET_POST,
    payload: id,
});

export const getUsers = () => ({
    type: GET_USERS,
});

function* getPostSaga(action) {
    yield put(startLoading(GET_POST)); // loading 시작
    // parameter로 action을 받아 오면 액션의 정보를 조회할 수 있습니다.
    try {
        // call을 사용하면 Promise를 반환하는 함수를 호출하고, 기다릴 수 있습니다.
        // 첫 번째 파라미터는 함수, 나머지 파라미터는 해당 함수에 넣을 인수입니다.
        const post = yield call(api.getPost, action.payload);
        yield put({
            type: GET_POST_SUCCESS,
            payload: post.data,
        });
    } catch (e) {
        yield put({
            type: GET_POST_FAILURE,
            payload: e,
            error: true,
        });
    }
    yield put(finishLoading(GET_POST));
}

function* getUsersSaga() {
    yield put(startLoading(GET_USERS));
    try {
        const users = yield call(api.getUsers);
        yield put({
            type: GET_USERS_SUCCESS,
            payload: users.data
        });
    } catch (e) {
        yield put({
            type: GET_USERS_FAILURE,
            payload: e,
            error: true,
        });
    }
    yield put(finishLoading(GET_USERS));
}

export function* sampleSaga() {
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}


// initial state
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리
const initialState = {
    post: null,
    user: null,
};

// reducer
const sample = (state = initialState, action) => {
    switch(action.type) {
        case GET_POST_SUCCESS :
            return {
                ...state,
                post: action.payload,
            }
        case GET_POST_FAILURE :
            return {
                ...state,
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload,
            }
        case GET_USERS_FAILURE:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default sample;