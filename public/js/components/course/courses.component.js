import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAll } from '../../actions/crudAction';
import CourseCard from './course-card.component';

class Courses extends Component {

    componentWillMount() {
        const { fetch } = this.props;
        fetch('courses');
    }

    render() {
        const { courses, ...props } = this.props;
        const path = props.location.pathname === '/' ? 'courses' : props.location.pathname;

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