import React, { Component } from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
        };
    }
    
    login = e => {
        e.preventDefault();
        localStorage.setItem("username", this.state.username);
        window.location.reload();
    };

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        });

    }


    render(){
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChanges}
                    ></input>
                    <input
                    type="text"
                    placeholder="Password"
                    name="password">
                    </input>
                    <button>Log In</button>
                </form>
            </div>
                
            
        );
    }
}

export default Login