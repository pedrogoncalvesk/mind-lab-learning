import React, { Component } from 'react';

import UserMenu from '../UserMenu';

class LoggedMenu extends Component {

    render() {
        return (
            <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                    <UserMenu />
                </ul>
            </div>
        );
    }
}

export default LoggedMenu;
