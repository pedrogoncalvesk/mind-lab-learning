import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <div className="navbar-custom-menu">
                <div className="login-nav">
                    <a className="btn" href="#/login">
                        Fazer Login
                    </a>
                    <a className="btn" href="#/signup">
                        Criar Conta
                    </a>

                </div>
            </div>
        );
    }
}

export default Menu;
