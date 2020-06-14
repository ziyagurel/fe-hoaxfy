import React from 'react';
import { signup } from '../api/apiCalls';

class UserSignupPage extends React.Component{
    state = {
        username : null,
        displayName : null,
        password : null,
        passwordRepeat : null,
        pendingApiCall : false
    }

    onChange = event =>{
        const {value,name} = event.target;
        this.setState({
            [name] : value
        });
    };

    onClickSignUp = async event => {
        event.preventDefault();
        const {username, displayName, password} = this.state
        const body ={
            username,
            displayName,
            password
        };

        this.setState({pendingApiCall : true});

        try{
            const response = await signup(body);
            console.log(response);
        }catch(error){

        }
        this.setState({pendingApiCall : false})
    }

    render(){
        const {pendingApiCall} = this.state;
        return(
            <div>
                <form className="container">
                    <h1 className="text-center">Sign Up</h1>
                    <div className="form-group">
                        <label>Username</label>
                        <input className="form-control" name="username" type="text" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Display Name</label>
                        <input className="form-control" name="displayName" type="text" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="password" type="password" onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password Repeat</label>
                        <input className="form-control" name="passwordRepeat" type="password" onChange={this.onChange}/>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall}>
                        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserSignupPage;