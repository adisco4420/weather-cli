const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');

module.exports = async (args) => {
    const spinner = ora().start();
    try {
        const location = args.location || args.l || await getLocation();
        const weather = await getWeather(location, 'tomorrow');
        spinner.stop();
        const tomorrowWeather = getTomoro(weather.list)         
        console.log(`tomorrow weather condition in ${location.city}, ${location.country_code}`);
        console.log(`\t ${tomorrowWeather.description} ${tomorrowWeather.temp} F`);  
    } catch (error) {
        console.error(error);
    }
}
function getTomoro(lists) {
    let newList = [];
    const date = new Date(); 
    const month = date.getMonth() + 1;
    const newMonth = month.toString().length > 1 ? month : `0${month}`
    const todayDate = date.getDate().toString().length > 1 ? date.getDate() : `0${date.getDate()}`
    const tomoroDate = `${date.getFullYear()}-${newMonth}-${todayDate + 1}`
    // console.log(tomoroDate);
    lists.map(list => {
        if (list.dt_txt.includes(tomoroDate)) {
            newList.push({description: list.weather[0].description, temp: list.main.temp})
        }
    });
    return newList[0];

}