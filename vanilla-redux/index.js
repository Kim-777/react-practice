import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');


// 액션 타입
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
const toggleSwitch = () => ({type: TOGGLE_SWITCH});
const increase = difference => ({type: INCREASE, difference});
const decrease = () => ({type: DECREASE});

const initialState = {
    toggle: false,
    counter: 0
};

// reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_SWITCH:
            return {
                ...state,
                toggle: !state.toggle
            }
        case INCREASE :
            return {
                ...state,
                counter: state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

// react의 render 대신 render 함수를 따로 정의하고 redux의 store 상태값에 변경이 있을때 호출되도로고 subscribe
const render = () => {
    const state = store.getState();

    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    counter.innerText = state.counter;
};

render();
store.subscribe(render);

// 액션 발생 시키기
divToggle.onclick = () => {
    store.dispatch(toggleSwitch());
}

btnIncrease.onclick = () => {
    store.dispatch(increase(1));
}

btnDecrease.onclick = () => {
    store.dispatch(decrease());
}