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
        if(name === 'password' || name === 'passwordRepeat'){
            console.log("calisti");
            if(name === 'password' && value !== this.state.passwordRepeat){
                errors.passwordRepeat = 'Password mismath';
                console.log("calisti-1");
            }
            else if(name === 'passwordRepeat' && value !== this.state.password){
                errors.passwordRepeat = 'Password mismath';
                console.log("calisti-2");
            }
            else{
                errors.passwordRepeat = undefined;
                console.log("calisti-3");
            }
        }
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
        const {username, displayName, password, passwordRepeat} = errors;
        return(
            <div>
                <form className="container">
                    <h1 className="text-center">Sign Up</h1>
                    <CustomInput name="username" label="Username" error={username} onChange={this.onChange}/>
                    <CustomInput name="displayName" label="Display Name" error={displayName} onChange={this.onChange}/>
                    <CustomInput name="password" label="Password" error={password} onChange={this.onChange} type="password"/>
                    <CustomInput name="passwordRepeat" label="Password Repeat" error={passwordRepeat} onChange={this.onChange} type="password"/>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall || passwordRepeat !== undefined}>
                        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserSignupPage;