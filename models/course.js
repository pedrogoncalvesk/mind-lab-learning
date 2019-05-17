'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
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

module.exports = mongoose.model('Course', CourseSchema);