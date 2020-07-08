import React from 'react';
import { signup } from '../api/apiCalls';
import CustomInput from '../components/CustomInput';
import {withTranslation} from 'react-i18next';

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
        const {t} = this.props;
        const {value,name} = event.target;
        const errors = {...this.errors};
        errors[name] = undefined;
        if(name === 'password' || name === 'passwordRepeat'){
            if(name === 'password' && value !== this.state.passwordRepeat){
                errors.passwordRepeat = t('Password mismatch');
            }
            else if(name === 'passwordRepeat' && value !== this.state.password){
                errors.passwordRepeat = t('Password mismatch');
            }
            else{
                errors.passwordRepeat = undefined;
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
        const {t} = this.props;
        return(
            <div>
                <form className="container">
                    <h1 className="text-center">{t('Sign Up')}</h1>
                    <CustomInput name="username" label={t('Username')} error={username} onChange={this.onChange}/>
                    <CustomInput name="displayName" label={t('Display Name')} error={displayName} onChange={this.onChange}/>
                    <CustomInput name="password" label={t('Password')} error={password} onChange={this.onChange} type="password"/>
                    <CustomInput name="passwordRepeat" label={t('Password Repeat')} error={passwordRepeat} onChange={this.onChange} type="password"/>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={this.onClickSignUp} disabled={pendingApiCall || passwordRepeat !== undefined}>
                        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>} {t('Sign Up')}</button>
                    </div>
                </form>
            </div>
        );
    }
}
const UserSignupPageWithTranslation = withTranslation()(UserSignupPage);
export default UserSignupPageWithTranslation;