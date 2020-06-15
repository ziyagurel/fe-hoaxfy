import React from 'react';
import { signup } from '../api/apiCalls';
import CustomInput from '../components/CustomInput'

class UserSignupPage extends React.Component{
    state = {
        username : null,
        displayName : null,
        password : null,
        passwordRepeat : null,
        pendingApiCall : false,
        errors : {}
    }

    onChange = event =>{
        const {value,name} = event.target;
        const errors = {...this.errors};
        errors[name] = undefined;
        this.setState({
            [name] : value,
            errors
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
            if(error.response.data.validationErrors){
                this.setState({errors: error.response.data.validationErrors})
            }
        }
        this.setState({pendingApiCall : false})
    }

    render(){
        const {pendingApiCall, errors} = this.state;
        const {username, displayname} = errors;
        return(
            <div>
                <form className="container">
                    <h1 className="text-center">Sign Up</h1>
                    <CustomInput name="username" label="Username" error={username} onChange={this.onChange}/>
                    <CustomInput name="displayname" label="Display Name" error={displayname} onChange={this.onChange}/>
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