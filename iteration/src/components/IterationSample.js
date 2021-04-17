import React, {useState, useRef} from 'react'

const IterationSample = () => {

    const ref = useRef(null);

    const [names, setNames] = useState([
        {id: 1, text: '리신'},
        {id: 2, text: '오리아나'},
        {id: 3, text: '피즈'},
        {id: 4, text: '케이틀린'}
    ]);

    const [input, setInput] = useState('')
    const [nextId, setNextId] = useState(5);

    const nameLists = names.map(name => (<li key={name.id} onDoubleClick={() => removeHandle(name.id)}>{name.text}</li>))

    const removeHandle = (id) => {
        setNames(names => [...names.filter(name => name.id !== id)])
    }

    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onClick = () => {
        setNames(names => [...names, {id:nextId, text:input}]);
        setNextId(id => id + 1);
        setInput('');
        ref.current.focus();
    }

    return (
        <>
            <div>
                {nameLists}
            </div>
            <input
                type="text"
                placeholder="다음 챔피언을 입력해주세요"
                value={input}
                onChange={onChange}
                ref={ref}
            />
            <button onClick={onClick}>button</button>
        </>
    )
}

export default IterationSample
