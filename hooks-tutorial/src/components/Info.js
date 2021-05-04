import React, { useState, useEffect } from 'react';

const Info = () => {

    const [inputValue, setInputValue] = useState({
        name: '',
        nickname: '',
    });

    const {name, nickname} = inputValue;

    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname,
        })
    }, [])

    const inputChange = e => {
        setInputValue({
            ...inputValue,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div>
            <input 
                value={name}
                name="name"
                onChange={inputChange}
            />
            <br />
            <input
                value={nickname}
                name="nickname"
                onChange={inputChange}
            />
            <div>{name}</div>
            <div>{nickname}</div>
        </div>
    )
}

export default Info
