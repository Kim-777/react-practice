import React, {useReducer} from 'react'
import useInputs from '../hooks/useInputs';

function reducer(state, action) {
    
    return ({
        ...state,
        [action.name] : action.value
    })

}

const Info = () => {

    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });

    const {name, nickname} = state;

    return (
        <div>
            <div>
                <input
                    name="name"
                    type="text"
                    placeholder="이름을 입력해주세요."
                    value={state.name}
                    onChange={onChange}
                />
                <input
                    name="nickname"
                    type="text"
                    placeholder="별명을 입력해주세요."
                    value={state.nickname}
                    onChange={onChange}
                />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info
