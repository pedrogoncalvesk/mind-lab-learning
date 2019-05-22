import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        borderRadius: 'unset',
        width: '230px',
        height: '56px',
    },
    avatarImg: {
        height: '70%',
    },
    inherit: { textAlign: 'inherit' },
    left: {
        justifyContent: 'flex-start',
        marginRight: 'auto',
    },
    center: {
        justifyContent: 'center',
        margin: 'auto'
    },
    right: {
        justifyContent: 'flex-end',
        marginLeft: 'auto',
    },
    justify: { textAlign: 'justify' }
};

class Logo extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired,
        to: PropTypes.string,
        align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
        className: PropTypes.string,
    };

    static defaultProps = {
        to: '/',
        align: 'left',
        className: ''
    };

    render() {
        const { classes, to, align, className } = this.props;

        return <Avatar
            src="/img/logo.png"
            className={classnames(classes.avatar, classes[align], className)}
            component={Link}
            to={to}
            imgProps={{ className: classes.avatarImg }} />;
    }
}

export default withStyles(styles)(Logo);
