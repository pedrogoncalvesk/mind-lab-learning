import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import Menu from '../Menu';
import LoggedMenu from '../LoggedMenu';
import Logo from '../Logo';

import styles from './styles';

class Header extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        classes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            menuActive: false,
            width: 0,
            height: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        let { menuActive } = this.state;
        const width = window.innerWidth;

        if (width <= 767 && menuActive === true) {
            menuActive = false;
        } else if (width > 767 && menuActive === false) {
            menuActive = true;
        }
        this.setState({
            menuActive,
            width,
            height: window.innerHeight
        });
    }

    toggleMenu(e) {
        e.preventDefault();
        let { menuActive } = this.state;
        this.setState({ menuActive: !menuActive });
    }

    render() {
        const { isAuthenticated, classes } = this.props;
        const { menuActive, width } = this.state;

        return (
            <AppBar color="default" position="sticky">
                <Toolbar className={classes.toolbar}>
                    {width <= 767 ? (
                        <div className={classes.toolbarContent}>
                            <IconButton
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="Menu"
                                onClick={this.toggleMenu.bind(this)}>
                                <MenuIcon />
                            </IconButton>
                            <Logo />
                        </div>
                    ) : <Logo />}

                    {menuActive ? (
                        <div className={width <= 767 ? classes.menuContainer : ''}>
                            {isAuthenticated ? <LoggedMenu /> : <Menu />}
                        </div>
                    ) : ''}
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(withStyles(styles)(Header));
