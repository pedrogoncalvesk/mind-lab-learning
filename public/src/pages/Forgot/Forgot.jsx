import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';

import * as flashMessage from '../../actions/flashMessage';

import FlashMessage from '../../components/FlashMessage';
import RenderText from '../../components/RenderText';

class Forgot extends Component {

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
        // TODO
    }

    render() {
        let message = this.props.message;
        const { handleSubmit, submitting } = this.props;

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="#">Forgot your password</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Enter your email address and we'll send you a link to reset it.</p>

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

                        <div className="row">
                            <div className="col-xs-4">
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-flat"
                                        disabled={submitting}>Reset Password
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
    message: state.flash.message
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(_.assign({}, flashMessage), dispatch)
});

const validateForgot = values => {
    const errors = {};
    if (!values.email) {
        errors.email = '(The email field is required.)';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address.';
    }

    return errors;
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'Forgot',
    validate: validateForgot
})(Forgot));
