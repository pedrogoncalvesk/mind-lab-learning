import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as authService from '../../services/authService';

class UserMenu extends Component {

    logOut(e) {
        e.preventDefault();
        this.props.actions.logout();
    }

    render() {
        const { name, lastName } = this.props;

        return (
            <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="/img/avatar.png" className="user-image" alt="User Image" />
                    <span className="hidden-xs">{name} {lastName}</span>
                </a>
                <ul className="dropdown-menu">
                    <li className="user-header">
                        <img src="/img/avatar.png" className="img-circle" alt="User Image" />

                        <p>
                            {name} {lastName} - Web Developer
                        </p>
                    </li>
                    <li className="user-footer">
                        <div className="pull-right">
                            <a href="#" className="btn btn-default btn-flat" onClick={this.logOut.bind(this)}>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
