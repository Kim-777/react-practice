import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainer = () => {

    const number = useSelector(({counter}) => counter.number)
    const dispatch = useDispatch();

    const onIncrease = useCallback(
        () => dispatch(increase())
        , [dispatch]
    );

    const onDecrease = useCallback(
        () => dispatch(decrease())
        , [dispatch]
    )

    return (
        <Counter 
            number={number} 
            onIncrease={onIncrease} 
            onDecrease={onDecrease}
        />
    )
}


export default CounterContainer;