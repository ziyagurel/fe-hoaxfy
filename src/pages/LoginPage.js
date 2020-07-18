import React, { Component } from 'react';
import CustomInput from '../components/CustomInput';
import { withTranslation } from 'react-i18next';

class LoginPage extends Component {
    state = {
        username : null,
        password : null
    }

    onChange = event => {
        const {name, value } = event.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        const { t } = this.props;
        return (
            <div className="container">
                <form>
                    <h1 className="text-center"> {t('Login')} </h1>
                    <CustomInput label={t("Username")} name="username" onChange = {this.onChange}/>
                    <CustomInput label={t("Password")} name="password" type="password" onChange = {this.onChange}/>
                    <div className="text-center">
                        <button className="btn btn-primary"> {t('Login')} </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withTranslation()(LoginPage);