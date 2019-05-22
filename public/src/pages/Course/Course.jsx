import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchById } from '../../actions/crudAction';

class Course extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        const { fetch, match: { params } } = this.props;
        if (params && params.courseId) {
            fetch('course', params.courseId);
        }
    }

    render() {
        const { course } = this.props;

        return (
            <section className="content">
                {course ? <h3 className="title-courses">Bem vindo(a) ao curso: {course.title}</h3> : ''}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    course: state.crud.selectedItem.course,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetch: fetchById
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Course);
