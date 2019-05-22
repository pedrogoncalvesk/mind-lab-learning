import React from 'react';
import PropTypes from 'prop-types';

import Input from '@material-ui/core/Input';

class InputEmail extends React.Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        error: PropTypes.bool,
        disabled: PropTypes.bool,
        required: PropTypes.bool,
        touched: PropTypes.bool,
        type: PropTypes.oneOf(['text']),
        autoComplete: PropTypes.oneOf(['on', 'off']),
        autoFocus: PropTypes.bool,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        // onEvents
        onAction: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func,
        onError: PropTypes.func,
        // Touch support
        touch: PropTypes.func,
        untouch: PropTypes.func,
        // Material UI props
        startAdornment: PropTypes.node,
        endAdornment: PropTypes.node,
    };

    static defaultProps = {
        error: false,
        disabled: false,
        required: false,
        touched: false,
        type: 'tel',
        autoComplete: 'on',
        autoFocus: false,
        placeholder: 'email@example.com',
        className: '',

        onAction: undefined,
        onBlur: undefined,
        onFocus: undefined,
        onError: undefined,

        touch: undefined,
        untouch: undefined,

        startAdornment: undefined,
        endAdornment: undefined,
    };

    constructor(props) {
        super(props);

        const { value, error, disabled, required } = props;

        this.state = { value, error, disabled, required };
    }

    // noinspection JSCheckFunctionSignatures
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            error: nextProps.error,
            disabled: nextProps.disabled,
            required: nextProps.required,
        });
    }

    handleKeyPressed(e) {
        const code = e.keyCode || e.which;
        const { onAction } = this.props;
        // enter button
        if (code === 13 && typeof onAction !== 'undefined') {
            e.preventDefault();
            onAction();
        }
    }

    handleBlur(e) {
        const value = String(e.target.value).toLowerCase();

        const { onError, onBlur } = this.props;
        const { required } = this.state;
        // eslint-disable-next-line no-useless-escape
        const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const isEmpty = value === '';

        const errorRequired = required ? isEmpty : false;
        const error = errorRequired || (!isEmpty && !regx.test(value));

        this.setState({ error });

        if (typeof onError === 'function') {
            onError({ target: { value: error } });
        }

        if (onBlur) onBlur(e);
    }

    handleTouch(value) {
        const { touch, untouch, name } = this.props;

        if (typeof touch === 'function' && value === '') {
            touch(name);
        } else if (typeof untouch === 'function') {
            untouch(name);
        }
    }

    handleFocus(e) {
        const value = String(e.target.value);
        const { onError, onFocus } = this.props;
        const error = false;

        if (typeof onError === 'function') {
            onError({ target: { value: error } });
        }

        if (onFocus) onFocus(e);

        this.handleTouch(value);
    }

    handleChange(e) {
        const value = String(e.target.value);
        const { onChange } = this.props;

        if (typeof onChange === 'function') {
            onChange({ target: { value } });
        }

        this.handleTouch(value);
    }

    render() {
        const {
            type,
            autoComplete,
            autoFocus,
            placeholder,
            className,
            startAdornment,
            endAdornment,
            touched,
        } = this.props;
        const { value, error, disabled, required } = this.state;

        return (
            <Input
                value={value}
                type={type}
                disabled={disabled}
                required={required}
                error={touched && error}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                placeholder={placeholder}
                className={className}
                onChange={e => this.handleChange(e)}
                onBlur={e => this.handleBlur(e)}
                onFocus={e => this.handleFocus(e)}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                onKeyPress={e => this.handleKeyPressed(e)}
            />
        );
    }
}

export default InputEmail;
