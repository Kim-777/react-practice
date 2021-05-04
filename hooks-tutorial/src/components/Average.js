import React, { useState, useMemo, useCallback } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산 중 ...');
    if (numbers.length === 0 ) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

const Average = () => {

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = useCallback(
        e => {
            setNumber(e.target.value)
        },
        [],
    )

    const onInsert = useCallback(
        () => {
            setList([...list, parseInt(number)]);
            setNumber('');
        },
        [number, list],
    )

    const remove = useCallback(index => {
        
        const tmpList = [...list];
        tmpList.splice(index, 1);
        setList(tmpList);
    }, [list])

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index} onDoubleClick={()=>{remove(index)}}>{value}</li>
                ))}
            </ul>
            <div>
                <d>평균값 :</d> {avg}
            </div>
        </div>
    )
}


export default Average
