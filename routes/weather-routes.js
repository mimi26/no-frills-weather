const express = require('express');
const router = express.Router();
const apiHelpers = require('../api-helpers/api-calls');



router.get('/', apiHelpers.geocodeCall, apiHelpers.darkSkyCall, (req, res) => {
    res.send({
        temp: res.locals.temp,
        feelsLike: res.locals.feelsLike,
        summary: res.locals.summary,
        forecast: res.locals.forecast,
        hourly: res.locals.hourly,
        minute: res.locals.minute,
        location: res.locals.location
    });
})

module.exports = router;
