import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Menu from './menu.component';
import LoggedMenu from './logged-menu.component';

class Header extends Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
    };

    render() {
        const { isAuthenticated } = this.props;
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <img src="js/theme/img/logo.png" alt="logo" />
                </a>
                <nav className="navbar navbar-static-top">
                    {/*<a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">*/}
                    {/*<span className="sr-only">Toggle navigation</span>*/}
                    {/*</a>*/}
                    {isAuthenticated ? <LoggedMenu /> : <Menu />}
                </nav>
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