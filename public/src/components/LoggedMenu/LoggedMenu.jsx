import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

import * as authService from '../../services/authService';

import styles from './styles';

class LoggedMenu extends Component {

    constructor(props) {
        super(props);

        this.state = { anchorEl: null };
    }

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes, name, lastName } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Typography variant="button" noWrap>
                    {name} {lastName}
                </Typography>
                <IconButton
                    aria-owns={open ? 'menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={this.handleClose}
                >
                    {/*<MenuItem onClick={this.handleClose}>Profile</MenuItem>*/}
                    <MenuItem onClick={e => this.logOut(e)}>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.auth.name,
    lastName: state.auth.lastName,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(_.assign({}, authService), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoggedMenu));
