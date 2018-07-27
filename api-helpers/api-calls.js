const axios = require('axios');

async function geocodeCall(req, res, next) {
    const MAP_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=11218&key=${process.env.MAP_KEY}`;
    const location = await axios(MAP_URL);
    res.locals.location = location.data.results[0].formatted_address;
    res.locals.lat = location.data.results[0].geometry.location.lat;
    res.locals.lng = location.data.results[0].geometry.location.lng;
    next();
}

async function darkSkyCall(req, res, next) {
    let lat;
    let lng;
    res.locals.lat ? lat = res.locals.lat : lat = 40.650002;
    res.locals.lng ? lng = res.locals.lng : lng = -73.949997;
    const WEATHER_API = `https://api.darksky.net/forecast/${process.env.WEATHER_KEY}/${lat},${lng}`;
    const weather = await axios(WEATHER_API);
    res.locals.time = weather.data.currently.time;
    res.locals.temp = Math.round(weather.data.currently.temperature);
    res.locals.feelsLike = Math.round(weather.data.currently.apparentTemperature);
    res.locals.summary = weather.data.currently.summary;
    res.locals.chanceOfRain = weather.data.currently.precipProbability;
    res.locals.windSpeed = weather.data.currently.windSpeed;
    res.locals.cloudCover = weather.data.currently.cloudCover;
    res.locals.forecast = weather.data.daily.data;
    res.locals.hourly = weather.data.hourly.data;
    res.locals.minute = weather.data.minutely;
    next();
}

module.exports = {
    geocodeCall,
    darkSkyCall
};
