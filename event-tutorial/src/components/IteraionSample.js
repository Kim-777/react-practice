import React, { useState } from 'react'

const IteraionSample = () => {

    const [names, setNames] = useState([
        { id: 1, text: '눈사람'},
        { id: 2, text: '얼음'},
        { id: 3, text: '꽃'},
        { id: 4, text: '바람'},
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const namesList = names.map(name => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>)

    const onRemove = id => {

        const removedNames = names.filter(name => name.id !== id);

        setNames(removedNames);
    }

    const onChange = e => {
        setInputText(e.target.value);
    }

    const onClick = () => {
        setNames(names.concat({
            id: nextId,
            text: inputText
        }));
        setNextId(nextId + 1);
        setInputText('');
    }

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </> 
    )
}

export default IteraionSample
