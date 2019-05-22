import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

import styles from './styles';

class NotFoundPage extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h4" align="center">
                    404 - Página não encontrada
                </Typography>
                <Typography variant="body1" align="center">
                    Desculpe, a página que você está procurando não foi encontrada!
                </Typography>
            </div>
        );
    }
}

export default withStyles(styles)(NotFoundPage);
