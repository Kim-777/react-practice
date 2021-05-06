import { createAction, handleActions } from 'redux-actions';

// action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action create function
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initial State
const initialState = {
    number: 0
};

// reducer
const counter = handleActions(
    {
        [INCREASE]: (state) => ({number: state.number + 1}),
        [DECREASE]: (state) => ({number: state.number - 1})
    },
    initialState,
)

export default counter;