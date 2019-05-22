import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';

import styles from './styles';

class Menu extends Component {

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button
                    variant="contained"
                    color="default"
                    component={Link}
                    to="/login"
                    className={classes.button}>
                    Fazer Login
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to="/signup"
                    className={classes.button}>
                    Criar conta
                </Button>
            </div>
        );
    }
}

export default withStyles(styles)(Menu);
