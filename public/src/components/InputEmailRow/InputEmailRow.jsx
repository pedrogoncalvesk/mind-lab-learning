import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import InputEmail from '../InputEmail';
import styles from './styles';

class InputEmailRow extends React.Component {

    static propTypes = {
        // eslint-disable-next-line react/forbid-prop-types
        classes: PropTypes.object.isRequired,
        id: PropTypes.string.isRequired,
        error: PropTypes.bool,
        shrink: PropTypes.bool,
        inputProps: PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            defaultValue: PropTypes.string,
            error: PropTypes.bool,
            errorDuplicated: PropTypes.bool,
            disabled: PropTypes.bool,
            required: PropTypes.bool,
            touched: PropTypes.bool,
            type: PropTypes.oneOf(['text']),
            autoComplete: PropTypes.oneOf(['on', 'off']),
            autoFocus: PropTypes.bool,
            placeholder: PropTypes.string,
            className: PropTypes.string,
            // onEvents
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
        }).isRequired,
        label: PropTypes.string,
        errorHelper: PropTypes.string,
        className: PropTypes.string,
        onAction: PropTypes.func,
        errorDuplicatedHelper: PropTypes.string,
    };

    static defaultProps = {
        error: false,
        shrink: undefined,
        label: '',
        errorHelper: '',
        errorDuplicatedHelper: '',
        className: '',
        onAction: undefined,
    };

    constructor(props) {
        super(props);

        const {
            error,
            inputProps: { error: errorInput, required, errorDuplicated },
        } = props;
        this.state = {
            error: errorInput || error,
            touched: false,
            required,
            errorDuplicated,
        };
    }

    // noinspection JSCheckFunctionSignatures
    componentWillReceiveProps(nextProps) {
        const {
            error,
            inputProps: { error: errorInput, errorDuplicated, required },
        } = nextProps;
        this.setState({
            error: errorInput || error,
            required,
            errorDuplicated,
        });
    }

    handleTouch = () => this.setState({ touched: true });

    render() {
        const {
            classes,
            id,
            inputProps,
            label,
            errorHelper,
            errorDuplicatedHelper,
            className,
            shrink,
            onAction,
        } = this.props;
        const { error, touched, errorDuplicated, required } = this.state;

        return (
            <Grid
                container
                justify="center"
                className={classNames(classes.gridContainer, className)}
            >
                <Grid item className={classes.gridItem}>
                    <FormControl fullWidth>
                        <InputLabel
                            htmlFor={id}
                            className={classNames(
                                shrink ? '' : classes.label,
                                classes.noWrap,
                            )}
                            shrink={shrink}
                        >
                            {label}
                        </InputLabel>
                        <InputEmail
                            {...inputProps}
                            touched={touched}
                            required={required}
                            onAction={onAction}
                            touch={this.handleTouch}
                            id={id}
                        />
                        <FormHelperText
                            className={classes.helperText}
                            style={{ opacity: error || errorDuplicated ? 1 : 0 }}
                            error={error || errorDuplicated}
                        >
                            {error ? errorHelper : null}
                            {errorDuplicated ? errorDuplicatedHelper : null}
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(InputEmailRow);
