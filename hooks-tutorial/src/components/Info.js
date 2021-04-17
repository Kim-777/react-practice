import React, { useEffect} from 'react'
import useInputs from './useInput';


const Info = () => {

    const [state, onChange] = useInputs({
        name : '',
        nickname: ''
    });

    const {name, nickname} = state;

    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        })
    },[])

    return (
        <div>
            <div>
                <input value={name} onClick={onChange} placeholder="이름" />
                <input value={nickname} onClick={onChange} placeholder="닉네임" />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b> 닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info
