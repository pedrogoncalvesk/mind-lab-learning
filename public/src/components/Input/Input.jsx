import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputContainer from '../InputContainer';
import InputContent from '../InputContent';

class Input extends Component {

    static propTypes = {
        input: PropTypes.object.isRequired,
        meta: PropTypes.object.isRequired,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        autoComplete: PropTypes.string,
        startAdornment: PropTypes.node,
    };

    render() {
        const { input, meta, label, placeholder, autoComplete, startAdornment } = this.props;

        const showError = ((meta.submitError && !meta.dirtySinceLastSubmit)
            || meta.error)
            && meta.touched;

        return (
            <InputContainer
                id={input.name}
                label={label}
                errorHelper={showError ? meta.error || meta.submitError : undefined}
                error={showError}
                shrink
            >
                <InputContent {...input}
                              placeholder={placeholder}
                              autoComplete={autoComplete}
                              error={showError}
                              startAdornment={startAdornment} />
            </InputContainer>
        );
    }
}

export default Input;
