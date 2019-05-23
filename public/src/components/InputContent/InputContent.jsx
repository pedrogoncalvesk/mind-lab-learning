import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';

class InputContent extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        error: PropTypes.bool,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel']),
        autoComplete: PropTypes.oneOf(['on', 'off']),
        autoFocus: PropTypes.bool,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func.isRequired,
        onFocus: PropTypes.func.isRequired,
        // Material UI props
        startAdornment: PropTypes.node,
        endAdornment: PropTypes.node,
    };

    static defaultProps = {
        error: false,
        disabled: false,
        required: false,
        type: 'text',
        autoComplete: 'on',
        autoFocus: false,
        placeholder: '',
        className: '',
        startAdornment: undefined,
        endAdornment: undefined,
    };

    render() {
        return <Input {...this.props} />;
    }
}

export default InputContent;
