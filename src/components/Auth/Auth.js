import React, {Component}from 'react';
import axios from 'axios';

class Auth extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            error: false,
        }
    }
    handleChange(e){
        let title = e.target.title
        let value = e.target.value
        this.setState({
            [title]: value
        })
    }
    handleLogin(){
        console.log(' handle login')
        // Check users in database compare name a pass
        let {username, password} = this.state
        let body = {
            username: username,
            password: password
        }
        console.log(body)
        axios.post('/api/login', body).then(res=>{
            console.log(res.data)
        })
    }
    handleRegister(){
        console.log(' handle register')
        // check if user exists if not create new user
    }

    render(){
        return(
            <div>
                <h1>User Name</h1>
                 <input title='username' type="text" onChange={(e)=>this.handleChange(e)}/>
                 <h1>Password</h1>
                 <input title='password' type="password" onChange={(e)=>this.handleChange(e)}/>
                 <button onClick={()=>this.handleLogin()}>Login</button>
                 <button onClick={()=>this.handleRegister()}>Register</button>
            </div>
        )
    }
}

export default Auth;

