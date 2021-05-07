import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


// creating action function;
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = () => ({
    type: INCREASE_ASYNC,
});
export const decreaseAsync = () => ({
    type: DECREASE_ASYNC,
})
// export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
// export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

// saga function
function* increaseSaga() {
    yield delay(1000); // 1초 기다립니다.
    yield put(increase());
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease()); // 특정 액션을 디스패치 합니다.
}

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고
    // 가장 마지막으로 실행된 작업만 수행합니다.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// initialState
const initialState = 0;

// reducer
const counter = handleActions(
    {
        [INCREASE] : state => state + 1,
        [DECREASE] : state => state - 1,
    },
    initialState,
)

export default counter;