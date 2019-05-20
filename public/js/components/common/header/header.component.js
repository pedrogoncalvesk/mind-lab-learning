import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Menu from './menu.component';
import LoggedMenu from './logged-menu.component';

class Header extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
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
        const { isAuthenticated } = this.props;
        const { menuActive } = this.state;

        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <img src="js/theme/img/logo.png" alt="logo" />
                </a>
                <a href="#" className="sidebar-toggle" onClick={this.toggleMenu.bind(this)}>
                    <span className="sr-only">Toggle navigation</span>
                </a>
                {menuActive ? (
                    <nav className="navbar navbar-static-top">
                        {isAuthenticated ? <LoggedMenu /> : <Menu />}
                    </nav>
                ) : ''}
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    };
}

export default connect(mapStateToProps)(Header);