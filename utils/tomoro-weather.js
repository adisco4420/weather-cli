const axios = require('axios');

module.exports = async (location) => {
    const city = location.city;
    const county_code = location.country_code;
    const result = await axios({
        method:'get',
        url:`http://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${county_code}&mode=json&cnt=3&units=metric&appid=c9d49310f8023ee2617a7634de23c2aa`,
      })
    //   console.log(result.data);
    return result.data.list
} 