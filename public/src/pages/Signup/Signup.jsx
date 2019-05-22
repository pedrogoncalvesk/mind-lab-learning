import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Common from '../../constants/common';
import * as apiAction from '../../actions/apiAction';
import * as crudAction from '../../actions/crudAction';
import * as flashMessage from '../../actions/flashMessage';

import FlashMessage from '../../components/FlashMessage';
import RenderText from '../../components/RenderText';

class Signup extends Component {

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
        this.props.actions.submitForm(Common.Users, formProps);
    }

    render() {
        let message = this.props.message;
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="login-box">
                <a href="#" className="logo">
                    <img src="js/theme/img/logo.png" alt="logo" />
                </a>
                <div className="login-box-body">
                    <p className="login-box-msg">Preencha suas informações</p>

                    <FlashMessage message={message} />

                    <form method="post" onSubmit={handleSubmit(this.handleSubmit)}>
                        <Field
                            name="first_name"
                            component={RenderText}
                            type="text"
                            label="Nome"
                        >
                        </Field>
                        <Field
                            name="last_name"
                            component={RenderText}
                            type="text"
                            label="Sobrenome"
                        >
                        </Field>
                        <Field
                            name="email"
                            component={RenderText}
                            type="email"
                            label="Email"
                        >
                        </Field>
                        <Field
                            name="password"
                            component={RenderText}
                            type="password"
                            label="Senha"
                        >
                        </Field>

                        <div className="row">
                            <div className="col-xs-4">
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat"
                                        disabled={submitting}>Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    message: state.flash.message,
    apiState: state.api,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(_.assign({}, crudAction, apiAction, flashMessage), dispatch)
});

const validateSignup = values => {
    const errors = {};
    if (!values.first_name) {
        errors.first_name = '(O nome é obrigatório.)';
    }

    if (!values.last_name) {
        errors.last_name = '(O sobrenome é obrigatório.)';
    }

    if (!values.email) {
        errors.email = '(O campo de email é obrigatório.)';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email inválido.';
    }

    if (!values.password) {
        errors.password = '(A senha é obrigatória.)';
    }

    return errors;
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Signup',
    validate: validateSignup
})(Signup));
