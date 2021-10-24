/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Redirect } from 'react-router-dom';

import { Link } from 'react-router-dom';


class Login extends Component {
    state = {
        email: '',
        password: '',
        show: false,
    }

    handleClick() {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    }

    componentDidMount() {
        if (this.props.authRedirectPath !== '/login') {
            this.props.onSetAuthRedirectPath();
        }
    }

    submitHandler = async (event) => {
        event.preventDefault();
        await this.props.onAuth(this.state.email, this.state.password);
    }

    handleChange(field, e) {
        let textField = e.target.value;
        this.setState({
            ...this.state,
            [field]: textField
        });
    }

    render() {
  

        console.log(this.props.isAuthenticated);
        console.log(this.props.authRedirectPath);
        if (this.props.isAuthenticated) {
            console.log("object");
            return (<Redirect to={this.props.authRedirectPath} />);
        }

        return (
            <div>
                <h1>h</h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        isAuthenticated: !(state.token === null || state.token === undefined),
        token: state.token,
        authRedirectPath: state.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);