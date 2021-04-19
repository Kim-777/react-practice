import React, {useCallback} from 'react';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { useSelector, useDispatch} from 'react-redux';

const CounterContainer = () => {

    const dispatch = useDispatch();
    const number = useSelector(state => state.counter.number)

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    )
}

// const mapStateToProps = state => ({
//     number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     }
// })

export default CounterContainer
