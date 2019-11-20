import React from 'react';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Chat from './Chat';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false
        }
        this.userRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    userName = (event) => {
        this.userRef = event.target.value
    }

    loginPassword = (event) => {
        this.passwordRef = event.target.value
    }

    login = () => {
        this.setState({
            loginFlag: true
        })
    }


    render() {
        if (this.state.loginFlag) {
            return <Redirect to='/chat' push={true} ></Redirect>
        }
        return (
            <div>
                <Card className='cardDiv'>
                    <CardContent>
                        Login Here
                        </CardContent>
                    <div>
                        <div style={{
                            position: 'fixed',
                            top: '27%',
                            left: '35%'
                        }}>
                            UserName : <input type='text'
                                id="username"
                                label="Username"
                                ref={this.userRef}
                                onChange={this.userName}
                            /><br />
                        </div>
                        <div style={{
                            position: 'fixed',
                            top: '39%',
                            left: '36%'
                        }}>
                            Password : <input type='text'
                                id="password"
                                label="Password"
                                ref={this.passwordRef}
                                onChange={this.loginPassword}
                            /><br />
                        </div>
                        <div style={{
                            position: 'fixed',
                            top: '50%',
                            left: '48%'
                        }}>
                            <Button variant="contained" component="span" onClick={this.login}>
                                Login
        </Button></div>
        <div style={{position: 'fixed',
    left: '35%',
    top: '60%'}}><a href="Forgot Password">Forgot Password</a></div>
                    </div>



                </Card>
            </div>
        )
    }
}

export default LoginPage;