import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import styles from './styles';

class InputContainer extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        error: PropTypes.bool,
        shrink: PropTypes.bool,
        label: PropTypes.string,
        errorHelper: PropTypes.string,
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {
        error: false,
        shrink: undefined,
        label: '',
        errorHelper: '',
        className: '',
    };

    render() {
        const {
            classes,
            id,
            label,
            errorHelper,
            className,
            shrink,
            error,
            children,
        } = this.props;

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
                        {children}
                        <FormHelperText
                            className={classes.helperText}
                            style={{ opacity: error ? 1 : 0 }}
                            error={error}
                        >
                            {error ? errorHelper : null}
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(InputContainer);
