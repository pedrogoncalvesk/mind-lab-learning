import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAll } from '../../actions/crudAction';

// Import custom components
// import Title from './title.component';
// import BoxRowOne from './box-row-one.component';

class LandingPage extends Component {

    componentWillMount() {
        const { fetch } = this.props;
        fetch('courses');
    }

    render() {
        const { courses } = this.props;
        return (
            <section className="content">
                <h2 className="title-courses">Cursos mais vistos</h2>

                <div className="courses-wrapper">
                    {courses ? courses.map(course => (
                        <div key={course._id} className="course">
                            <div className="card">
                                <a href="/curso-online-comunicacao">
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
                                </a>
                                <div className="btns-action-meus-cursos" style={{ textAlign: 'left' }}>
                                    <a href="/curso-online-comunicacao"
                                       className="btn-continuar waves-effect waves-dark btn">
                                        Matricular
                                    </a>
                                </div>
                            </div>
                        </div>
                    )) : ''}
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.crud.courses
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetch: fetchAll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);