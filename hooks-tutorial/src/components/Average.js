import React, { useState, useMemo, useCallback, useRef } from 'react'

const getAverage = numbers => {
    console.log('평균값 계산 중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = useCallback(
        e => {
        
            if(!isFinite(+e.target.value)) {
                alert('숫자를 입력해주세요');
                return;
            }
            setNumber(e.target.value);
        },
        [],
    );

    const onInsert = useCallback(
        () => {
            if(number.length === 0) {
                alert('값을 입력하셔야합니다.');
                return;
            }
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputEl.current.focus();
        },
        [list, number],
    )

    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값: </b> {avg}
            </div>
        </div>
    )
}

export default Average
