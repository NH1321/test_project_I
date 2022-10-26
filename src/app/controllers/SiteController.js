const Course = require('../models/Course');

class SiteController {

    // [GET] /
    home(req, res, next) {

        Course.find({}).lean()
        .then(courses => res.render('home', {
            courses: courses
        }))
        .catch(next);

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;
