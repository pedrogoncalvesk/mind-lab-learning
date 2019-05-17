const express = require('express');
const router = express.Router();
const Course = require('../controllers/CourseController');
const isAuthenticated = require('../middlewares/authentication');

/*  "/api/courses"
 *    GET: finds all courses
 *    POST: creates a new course
 */
router.route('/courses')

    /**
     * Creates a new course
     *
     * HTTP POST http://localhost:3000/api/courses
     * @return list of courses in JSON format
     */
    .post(function (req, res) {
        Course.store(req, res);
    })

    /**
     * find all the courses
     *
     * HTTP GET http://localhost:3000/api/courses
     * @return list of courses in JSON format
     */
    .get(function (req, res) {
       Course.findAll(req, res);
    });


/*  "/api/courses/:id"
 *    GET: find course by id
 *    PUT: update course by id
 *    DELETE: deletes course by id
 */
router.route('/courses/:id')

    /**
     * Find the course with that id
     *
     * HTTP GET http://localhost:3000/api/courses/:id
     * @return list of courses in JSON format
     */
    .get(isAuthenticated, function (req, res) {
        Course.findById(req, res);
    })

    /**
     * Update the course with that id
     *
     * HTTP PUT http://localhost:3000/api/courses/:id
     * @return list of courses in JSON format
     */
    .put(isAuthenticated, function (req, res) {
       Course.update(req, res);
    })

    /**
     * Delete the course with that id
     *
     * HTTP DELETE http://localhost:3000/api/courses/:id
     * @return list of courses in JSON format
     */
    .delete(isAuthenticated, function (req, res) {
       Course.delete(req, res);
    });

module.exports = router;
