import React, {useState} from 'react'

const EventPractice = () => {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + " : " + message);
        setUsername('');
        setMessage('');
    }
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                value={username}
                onChange={onChangeUsername}
                placeholder="이름을 입력하세요"
            />
            <input
                type="text"
                name="message"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
                placeholder="메세지를 입력하세요"
            />
            <button
                onClick={onClick}
            >
            버튼
            </button>
        </div>
    )
}

export default EventPractice
