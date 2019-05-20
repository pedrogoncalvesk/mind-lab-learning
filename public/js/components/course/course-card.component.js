import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CourseCard extends Component {

    static propTypes = {
        course: PropTypes.object.isRequired,
        path: PropTypes.string.isRequired,
    };

    render() {
        const { course, path } = this.props;

        return (
            <div key={course._id} className="course">
                <div className="card">
                    <Link to={`${path}/${course._id}`}>
                        <div className="header">
                            <p className="title">
                                {course.title}
                            </p>
                        </div>
                        <div className="img-background"
                             style={{ backgroundImage: 'url(' + course.cover + ')' }}>
                        </div>
                        <div className="description">
                            <p>{course.description}</p>
                        </div>
                    </Link>
                    <div className="actions">
                        <Link to={`${path}/${course._id}`}
                           className="btn">
                            Matricular
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default CourseCard;
