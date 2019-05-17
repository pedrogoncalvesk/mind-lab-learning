import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAll } from '../../actions/crudAction';

// Import custom components
// import Title from './title.component';
// import BoxRowOne from './box-row-one.component';

class LandingPage extends Component {

    state = {
        courses: [
            {
                _id: 1,
                title: 'Comunicação',
                description: 'Saber se comunicar é uma habilidade indispensável para melhorar suas relações profissionais e pessoais. Conheça os diferentes tipos de comunicação, conceitos básicos sobre o tema e dicas dos especialistas nos temas Storytelling, Comunicação Não-Violenta (CNV).',
                cover: 'https://cdn.veduca.org/uploads/64fe3c3620c3a54cd0d49319318e4027.jpg'
            },
            {
                _id: 2,
                title: 'LGBT+ Conceitos e Histórias',
                description: 'O curso oferece uma visão geral sobre questões que envolvem a sexualidade humana e a identidade de gênero. Aproveite, este curso é gratuito oferecido por: Serasa Experian',
                cover: 'https://cdn.veduca.org/uploads/8ffd52964f1384a53476d273a2eeea92.jpg'
            },
            {
                _id: 3,
                title: 'Gestão de Pessoas',
                description: 'Se você está à frente de um time, liderando projetos e gerindo profissionais com perfis diferentes, este curso é pra você. Estude com André Fischer, Prof. Dr. da FEA/USP para desenvolver sua liderança e inspirar pessoas a conquistarem seus melhores resultados.',
                cover: 'https://cdn.veduca.org/uploads/121adea9dfb7a2d9408e44ab70ba2d3e.jpg'
            }
        ]
    };

    // componentWillMount() {
    //     const { fetch } = this.props;
    //     fetch('courses');
    // }

    render() {
        // const { courses } = this.props;
        const { courses } = this.state;
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