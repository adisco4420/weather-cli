const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');

module.exports = async (args) => {
    const spinner = ora().start();
    try {
        const location = args.location || args.l || await getLocation();
        const weather = await getWeather(location, 'tomorrow');
        spinner.stop();
        const tomorrowWeather = weather.list[1]        
        console.log(`tomorrow weather condition in ${location.city}, ${location.country_code}`);
        console.log(`\t ${tomorrowWeather.weather[0].description} ${tomorrowWeather.deg} F`);  
    } catch (error) {
        console.error(error);
    }
}
