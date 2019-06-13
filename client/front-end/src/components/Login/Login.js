import React from 'react';
import axios from 'axios';

import '../SignUp/SignUp.css';

export default class Login extends React.Component {
    state = {
            username: '',
            password: '',
    };

    handleChanges = event => {
        const { id, value } = event.target;

        this.setState({ [id]: value })
    }

    handleSubmit = event => {
        event.preventDefault();

        const endpoint = 'http://localhost:5000/api/auth/login';

        axios
            .post(endpoint, this.state)
            .then(res => {
                console.log('RESPONSE', res.data)
                localStorage.setItem('jwt', res.data.token);
                // this.props.history.push('/users')
            })
            .catch(error => {
                console.log('ERROR', error)
            })
    }

    render() {
        return (
            <div className='page-container'>
                <form onSubmit={this.handleSubmit} className='form-container'>
                    <h1> Login </h1>

                    <div className='align-text'>
                        <p> Username </p>
                        <input
                            id='username'
                            required
                            onChange={this.handleChanges}
                            value={this.state.username}
                            type='text'
                        />

                        <p> Password </p>
                        <input
                            id='password'
                            required
                            onChange={this.handleChanges}
                            value={this.state.password}
                            type='password'
                        />

                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>

            </div>
        )
    }
}

