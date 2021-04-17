import React, { Component } from 'react';

class EventPractice extends Component {

    state = {
        name: "",
        nickname: '',
        friend: '',
        address: '',
        selected: 0,
    }


    handleChange = (e) =>{
        this.setState({
            ...this.state,
            [e.target.name]: [e.target.value]
        })
    }

    handleClick = () => {
        alert(this.state.selected);
        this.setState({name: ''});
    }

    selectChange = (e) => {
        this.setState({selected: e.target.value})
    }

    render() {
        const {name, nickname, friend, address} = this.state;
        return (    
            <>
                <div>
                    <h1>이벤트 연습</h1>
                    <input
                        type="text"
                        name="name"
                        placeholder="이름을 입력하세요"
                        onChange={this.handleChange}
                        value={name}
                    />
                    <br/>
                    <input
                        type="text"
                        name="nickname"
                        placeholder="별명을 입력하세요"
                        onChange={this.handleChange}
                        value={nickname}
                    />
                    <br/>
                    <input
                        type="text"
                        name="friend"
                        placeholder="친구의 이름을 입력해 보세요"
                        onChange={this.handleChange}
                        value={friend}
                    />
                    <br/>
                    <input
                        type="text"
                        name="address"
                        placeholder="주소를 입력해 보세요"
                        onChange={this.handleChange}
                        value={address}
                    />
                    <br/>
                </div>
                <select onChange={this.selectChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                <button onClick={this.handleClick}
                >
                    button
                </button>
            </>
        );
    }
}

export default EventPractice;