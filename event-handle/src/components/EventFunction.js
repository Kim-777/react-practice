import React, {useState} from 'react'

const EventFunction = () => {

    const [form, setForm] = useState({name: '', nickname:''});

    const {name, nickname} = form;

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: [e.target.value]
        })
    }

    const onClick = () => {
        alert(name + " : " + nickname);
        setForm({
            name: '',
            nickname: '',
        })
    }

    return (
        <div>
            <input 
                type="text"
                name="name"
                value={name}
                placeholder="이름을 입력해주세요"
                onChange={onChange}
            />
            <input
                type="text"
                name="nickname"
                value={nickname}
                placeholder="별명을 입력해주세요"
                onChange={onChange}
            />
            <button onClick={onClick}>button</button>
            <div>입력된 이름 : {name}</div>
            <div>입력된 별명: {nickname}</div>
        </div>
    )
}

export default EventFunction
