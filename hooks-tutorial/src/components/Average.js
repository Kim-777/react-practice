import React, {useState, useMemo, useCallback, useRef} from 'react'

const getAverage = (numbers) => {
    console.log('평균값 계산즁~');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length
} 

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange =useCallback(
        (e) => {
            setNumber(e.target.value);
        },
        [],
    );

    const onClick = useCallback(
        () => {
            if(number==='') return alert('아무것도 입력되지 않았습니다.');
            if(!isFinite(number)) {
                return alert('숫자를 입력해주세요.')
            }
    
            setList(list => list.concat(parseInt(number)));
            setNumber('');
            inputEl.current.focus();
        },
        [number, list],
    )

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <br/>
            <button onClick={onClick}>button</button>
            <br/>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값 : </b> {avg} 
            </div>
        </div>
    )
}

export default Average
