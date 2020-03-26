import React, {Component} from 'react'

class Login extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleLogin = this.handleLogin.bind(this)
        // this.handleUserChange = this.handleLockChange.bind(this)
        // this.handleLockChange = this.handleUserChange.bind(this)
    }

    handleUserChange(name){
        this.setState({username: name})
    }

    handleLockChange(pass){
        this.setState({password: pass})
    }

    handleLogin() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return(
            <div>
                <input 
                onChange={e => this.handleUserChange(e.target.value)} 
                placeholder='username'
                />

                <input 
                onChange={e => this.handleLockChange(e.target.value)} 
                placeholder='password'
                />

                <button onClick={this.handleLogin}>Login</button>

            </div>
        )
    }

}

export default Login