const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');

module.exports = async (args) => {
    const spinner = ora().start();
    try {
        const location = args.location || args.l || await getLocation();
        const weather = await getWeather(location, 'today');
        spinner.stop();
        console.log(`current condition in ${location.city}, ${location.country_code}`);
        console.log(`\t ${weather.weather[0].description} ${weather.main.temp} F`);  
    } catch (error) {
        console.error(error);
    }
}