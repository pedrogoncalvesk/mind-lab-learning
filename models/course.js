/* eslint-disable */
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-findorcreate');
mongoose.Promise = require('bluebird');

const CourseSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the title'
    },
    description: {
        type: String,
        required: 'Please enter the description'
    },
    cover: {
        type: String,
        required: 'Please enter the cover'
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['active', 'inactive']
        }],
        default: ['active']
    }
});

CourseSchema.plugin(findOrCreate);

const Course = mongoose.model('Course', CourseSchema);

// Mock for Course schema
process.nextTick(function () {
    Course.findOrCreate({ title: 'Comunicação' }, {
        description: 'Saber se comunicar é uma habilidade indispensável para melhorar suas relações profissionais e pessoais. Conheça os diferentes tipos de comunicação, conceitos básicos sobre o tema e dicas dos especialistas nos temas Storytelling, Comunicação Não-Violenta (CNV).',
        cover: 'https://cdn.veduca.org/uploads/64fe3c3620c3a54cd0d49319318e4027.jpg',
    }).then(res => console.log('Find or create course mock with title: ' + res.doc.title)).catch(
        err => console.log(err.message)
    );

    Course.findOrCreate({ title: 'LGBT+ Conceitos e Histórias' }, {
        description: 'O curso oferece uma visão geral sobre questões que envolvem a sexualidade humana e a identidade de gênero. Aproveite, este curso é gratuito oferecido por: Serasa Experian',
        cover: 'https://cdn.veduca.org/uploads/8ffd52964f1384a53476d273a2eeea92.jpg',
    }).then(res => console.log('Find or create course mock with title: ' + res.doc.title)).catch(
        err => console.log(err.message)
    );

    Course.findOrCreate({ title: 'Gestão de Pessoas' }, {
        description: 'Se você está à frente de um time, liderando projetos e gerindo profissionais com perfis diferentes, este curso é pra você. Estude com André Fischer, Prof. Dr. da FEA/USP para desenvolver sua liderança e inspirar pessoas a conquistarem seus melhores resultados.',
        cover: 'https://cdn.veduca.org/uploads/121adea9dfb7a2d9408e44ab70ba2d3e.jpg',
    }).then(res => console.log('Find or create course mock with title: ' + res.doc.title)).catch(
        err => console.log(err.message)
    );

    Course.findOrCreate({ title: 'Libras' }, {
        description: 'Uma ótima porta de entrada para uma língua e cultura à qual pertencem milhões de brasileiros. Com este curso você formará um vocabulário básico e alcançará um bom entendimento de como a língua funciona.',
        cover: 'https://cdn.veduca.org/uploads/a37cead1d4a85d95776dde84afd2ef29.jpg',
    }).then(res => console.log('Find or create course mock with title: ' + res.doc.title)).catch(
        err => console.log(err.message)
    );
});

module.exports = Course;