import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderText extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        label: PropTypes.string,
        meta: PropTypes.object,
        children: PropTypes.object
    };

    render() {
        const { input: { type, ...input }, label, meta: { touched, error, invalid, warning }, children } = this.props;

        return (
            <div className={`form-group has-feedback ${touched && invalid ? 'has-error' : ''}`}>
                <input {...input} type={type} className="form-control" placeholder={label} />
                {children}
                <div className="help-block">
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        );
    }
}

export default RenderText;
