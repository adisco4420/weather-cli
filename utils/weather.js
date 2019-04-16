const axios = require('axios');

module.exports = async (location, day) => {
    const city = location.city;
    const country_code = location.country_code;
    let url;
    if (day === 'today') {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&APPID=4360776cb4bc583cf137a178860aae0c`;
    } if (day === 'tomorrow') {
        url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country_code}&APPID=4360776cb4bc583cf137a178860aae0c`
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country_code}&APPID=4360776cb4bc583cf137a178860aae0c`;
    }
    const result = await axios({
        method:'get',
        url: url,
      })
    return result.data
}

