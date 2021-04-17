import React, { Component } from 'react';
import './ValidationSample.css';


class ValidationSample extends Component {
    
    state = {
        password: '',
        clicked: false,
        validated: false,
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        })
        this.input.focus();
    }
    
    render() {

        const { password, clicked, validated } = this.state;

        return (
            <div>
                <input 
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    className={clicked ? (validated ? 'success' : 'failure') : ''}
                    ref={ref => this.input = ref}
                />
                <button onClick={this.handleButtonClick}>button</button>
            </div>
        );
    }
}

export default ValidationSample;