import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends Component {

    static propTypes = {
        message: PropTypes.object.isRequired
    };

    render() {

        const type = this.props.message.type;
        const text = this.props.message.text;

        if (!text) {
            return null;
        }
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'error',
                'alert-warning': type === 'warning',
                'alert-info': type === 'info'
            })}>
                {text}
            </div>
        );
    }
}

export default FlashMessage;
