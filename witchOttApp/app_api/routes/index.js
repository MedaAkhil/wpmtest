const express = require('express');
const router = express.Router();
const ctrlMovies = require('../controllers/movies');
const strlWebSeries = require('../controllers/webseries');
const ctrlReviews = require('../controllers/reviews');
// Movies
router.route('/movies')
    .get(ctrlMovies.moviesList)
    .post(ctrlMovies.moviesCreate);
router.route('/movies/:movieid')
    .get(ctrlMovies.moviesReadOne)
    .put(ctrlMovies.moviesUpdateOne)
    .delete(ctrlMovies.moviesDeleteOne);
//WebSeries
router.route('/webseries')
    .get(strlWebSeries.webSeriesList)
    .post(strlWebSeries.webSeriesCreate);
router.route('/webseries/:webseriesid')
    .get(strlWebSeries.webSeriesReadOne)
    .put(strlWebSeries.webSeriesUpdateOne)
    .delete(strlWebSeries.webSeriesDeleteOne);


router.route('/serials')
    .get(ctrlMovies.serialslist);
router.route('/serials/:serialsid')
    .get(ctrlMovies.serialslistone);



// reviews
router.route('/movies/:movieid/reviews')
    .post(ctrlReviews.reviewsCreate);
router.route('/movies/:movieid/reviews/:reviewid')
    .get(ctrlReviews.reviewsReadOne)
    .put(ctrlReviews.reviewsUpdateOne)
    .delete(ctrlReviews.reviewsDeleteOne);

module.exports = router;