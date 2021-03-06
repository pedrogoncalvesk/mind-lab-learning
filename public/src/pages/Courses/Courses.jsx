import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Common from '../../constants/common';
import { fetchAll } from '../../actions/crudAction';
import CourseCard from '../../components/CourseCard';

class Courses extends Component {

    static propTypes = {
        match: PropTypes.object.isRequired,
    };

    componentWillMount() {
        const { fetch } = this.props;
        fetch(Common.Courses);
    }

    render() {
        const { courses, match } = this.props;
        const path = match.path === '/' ? Common.Courses : match.path;

        const linkList = courses ? courses.map(course => (
            <CourseCard key={course._id} course={course} path={path} />
        )) : '';

        return (
            <div>
                <section className="content">
                    <h1 className="title-courses">Cursos mais vistos</h1>

                    <div className="courses-wrapper">
                        {linkList}
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.crud.courses
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetch: fetchAll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
