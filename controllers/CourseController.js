'use strict';
const Course = require('../models/course');

/**
 * Find all the courses
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.findAll = function (req, res) {
    Course.find({}, function (err, course) {
        if (err) {
            res.send(err);
        }
        res.json(course);
    });
};

/**
 * Store new course
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.store = function (req, res) {
    const newCourse = new Course(req.body);
    newCourse.save(function (err, course) {
        if (err) {
            res.send(err);
        }
        res.json(course);
    });
};

/**
 * Find the course by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.findById = function (req, res) {
    Course.findById(req.params.id, function (err, course) {
        if (err) {
            res.send(err);
        }
        res.json(course);
    });
};

/**
 * Update the course by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.update = function (req, res) {
    Course.findOneAndUpdate(req.params.id, req.body, {new: true}, function (err, course) {
        if (err) {
            res.send(err);
        }
        res.json(course);
    });
};

/**
 * Delete the course by id
 *
 * @param {Object} req
 * @param {Object} res
 */
exports.delete = function (req, res) {
    Course.remove({
        _id: req.params.id
    }, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Course successfully deleted'});
    });
};