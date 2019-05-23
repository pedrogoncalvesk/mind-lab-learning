import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';

import { Button, Grid, InputAdornment, Paper, Snackbar, Typography } from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import LockOutlined from '@material-ui/icons/LockOutlined';
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';

import Common from '../../constants/common';
import * as apiAction from '../../actions/apiAction';
import * as crudAction from '../../actions/crudAction';
import * as flashMessage from '../../actions/flashMessage';

import Logo from '../../components/Logo';
import FlashMessage from '../../components/FlashMessage';
import Input from '../../components/Input';

import styles from './styles';

class Signup extends Component {

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
        this.props.actions.submitForm(Common.Users, formProps).then(() =>
            this.props.history.goBack()
        );
    }

    render() {
        const { classes, message } = this.props;

        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Paper className={classes.paper} elevation={1}>
                        <Logo align="center" className={classes.logo} />

                        <Typography variant="subtitle1" align="center">
                            Preencha suas informações.
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
                                if (!values.first_name) {
                                    errors.first_name = 'O nome é obrigatório.';
                                }

                                if (!values.last_name) {
                                    errors.last_name = 'O sobrenome é obrigatório.';
                                }

                                if (!values.email) {
                                    errors.email = 'O campo de email é obrigatório.';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                                    errors.email = 'Email inválido.';
                                }

                                if (!values.password) {
                                    errors.password = 'A senha é obrigatória.';
                                }

                                return errors;
                            }}
                            render={({ handleSubmit, pristine, invalid, submitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="first_name"
                                           label="Nome"
                                           type="text"
                                           startAdornment={(
                                               <InputAdornment position="start">
                                                   <Person color="action" />
                                               </InputAdornment>
                                           )}
                                           component={Input} />
                                    <Field name="last_name"
                                           label="Sobrenome"
                                           type="text"
                                           startAdornment={(
                                               <InputAdornment position="start">
                                                   <PersonOutline color="action" />
                                               </InputAdornment>
                                           )}
                                           component={Input} />
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
                                        Cadastrar
                                    </Button>
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
    message: state.flash.message,
    apiState: state.api,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(_.assign({}, crudAction, apiAction, flashMessage), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Signup));
