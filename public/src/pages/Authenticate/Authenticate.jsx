import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {

    class Authenticate extends Component {

        static propTypes = {
            history: PropTypes.object.isRequired,
            isAuthenticated: PropTypes.bool.isRequired
        };

        componentWillMount() {
            if (!this.props.isAuthenticated) {
                this.props.history.replace('/login');
            }
        }

        // componentWillUpdate(nextProps) {
        //     if (!nextProps.isAuthenticated) {
        //         this.context.router.push('/dashboard');
        //     }
        // }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(Authenticate);
}
