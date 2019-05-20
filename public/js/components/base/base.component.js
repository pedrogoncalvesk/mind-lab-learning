import React, { Component } from 'react';

import Header from '../common/header/header.component';

class Base extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content-wrapper">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Base;
