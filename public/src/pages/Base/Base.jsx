import React, { Component } from 'react';

import Header from '../../components/Header';

class Base extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default Base;
