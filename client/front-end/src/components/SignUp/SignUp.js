import React from 'react';

import './SignUp.css';

import { connect } from 'react-redux';
// import { signUp } from '../../actions';

class SignUp extends React.Component {
    state = {
        user: {
            username: "",
            password: "",
            department: "",
        }
    }

    render() {
        return (
            <div className='page-container'>
                <form className='form-container'>
                    <h1> Sign-up to Login!</h1>

                    <div className = 'align-text'>
                        <p> Username </p>
                        <input
                            name='username'
                            required
                            value={this.state.user.username}
                        />

                        <p> Password </p>
                        <input
                            name='password'
                            required
                            value={this.state.user.password}
                        />

                        <p> Department </p>
                        <input
                            name='department'
                            required
                            value={this.state.user.department}
                        />
                    </div>
                </form>

            </div>
        )
    }
}

export default connect(
    // { signUp }
)(SignUp)