import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {

    render() {
        return (
            <div className="navbar-custom-menu">
                <div className="login-nav">
                    <Link to="/login" className="btn">
                        Fazer Login
                    </Link>
                    <Link to="/signup" className="btn fill">
                        Criar Conta
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
