import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { Paper, Typography, InputAdornment, Snackbar, Button, Grid } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/LockOutlined';

import * as authService from '../../services/authService';
import * as flashMessage from '../../actions/flashMessage';

import Logo from '../../components/Logo';
import FlashMessage from '../../components/FlashMessage';
import Input from '../../components/Input';

import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { flashMessageOpen: false };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { message: { text } } = this.props;
        const { message: { text: textOld } } = prevProps;

        if (prevState.flashMessageOpen === this.state.flashMessageOpen) {
            if (textOld === null && text !== null) {
                this.setState({ flashMessageOpen: true });
            } else if (textOld !== null && text === null) {
                this.setState({ flashMessageOpen: false });
            }
        }
    }

    componentWillUnmount() {
        this.props.actions.removeFlashMessage();
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.actions.removeFlashMessage();
    };

    handleSubmit(formProps) {
        this.props.actions.login(formProps);
    }

    render() {
        const { classes, message } = this.props;

        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper} elevation={1}>
                        <Logo align="center" className={classes.logo} />

                        <Typography variant="subtitle1" align="center">
                            Faça login na sua conta com seu email e senha.
                        </Typography>

                        <Snackbar
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            open={this.state.flashMessageOpen}
                            autoHideDuration={6000}
                            onClose={this.handleClose}
                        >
                            <FlashMessage
                                onClose={this.handleClose}
                                variant={message.type || 'error'}
                                message={message.text || ''}
                            />
                        </Snackbar>

                        <Form
                            onSubmit={(props) => this.handleSubmit(props)}
                            validate={values => {
                                const errors = {};

                                if (!values.email) {
                                    errors.email = 'O campo de email é obrigatório.';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                    errors.email = 'Email inválido.';
                                }

                                if (!values.password) {
                                    errors.password = 'O campo de senha é obrigatório.';
                                }

                                return errors;
                            }}
                            render={({ handleSubmit, pristine, invalid, submitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="email"
                                           label="Email"
                                           type="email"
                                           placeholder="email@example.com"
                                           startAdornment={(
                                               <InputAdornment position="start">
                                                   <Email color="action" />
                                               </InputAdornment>
                                           )}
                                           component={Input} />
                                    <Field name="password"
                                           label="Senha"
                                           type="password"
                                           autoComplete="off"
                                           startAdornment={(
                                               <InputAdornment position="start">
                                                   <LockOutlined color="action" />
                                               </InputAdornment>
                                           )}
                                           component={Input} />
                                    <Button type="submit"
                                            variant="outlined"
                                            color="primary"
                                            fullWidth
                                            disabled={pristine || invalid || submitting}
                                            className={classes.button}>
                                        Login
                                    </Button>

                                    {/*<Link to={'/forgot'}>I forgot my password</Link>*/}
                                    <Typography variant="button"
                                                align="center"
                                                component={Link}
                                                to="/signup"
                                                gutterBottom>
                                        Cadastre-se
                                    </Typography>
                                </form>
                            )}
                        />
                    </Paper>
                </Grid>
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
