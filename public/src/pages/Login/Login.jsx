import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { Avatar, Paper, Typography } from '@material-ui/core';

import * as authService from '../../services/authService';
import * as flashMessage from '../../actions/flashMessage';

import Logo from '../../components/Logo';
import FlashMessage from '../../components/FlashMessage';
import RenderText from '../../components/RenderText';

import styles from './styles';

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        submitting: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.actions.removeFlashMessage();
    }

    handleSubmit(formProps) {
        this.props.actions.login(formProps);
    }

    render() {
        let message = this.props.message;
        const { handleSubmit, submitting, classes } = this.props;

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={1}>
                    <Logo align="center" />
                    <Typography variant="subtitle1" align="center">
                        Faça login na sua conta com seu email e senha.
                    </Typography>
                    <FlashMessage message={message} />
                    <form method="post" onSubmit={handleSubmit(this.handleSubmit)}>
                        <Field
                            name="email"
                            component={RenderText}
                            type="email"
                            label="Email"
                        >
                            <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                        </Field>

                        <Field
                            name="password"
                            component={RenderText}
                            type="password"
                            label="Senha"
                        >
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </Field>

                        <div className="row">
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat"
                                        disabled={submitting}>Login
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <br />
                            <div className="col-xs-8">
                                {/*<Link to={'/forgot'}>I forgot my password</Link>*/}
                                {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                                <Link to={'/signup'}>Cadastre-se</Link>
                            </div>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    message: state.flash.message
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(_.assign({}, authService, flashMessage), dispatch)
});

const validateLogin = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '(O campo de email é obrigatório.)';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido.';
    }

    if (!values.password) {
        errors.password = '(O campo de senha é obrigatório.)';
    }
    return errors;
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Login',
    validate: validateLogin
})(withStyles(styles)(Login)));
