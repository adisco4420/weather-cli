const axios = require('axios');

module.exports = async (location) => {
    const city = location.city;
    const county_code = location.country_code;
    const result = await axios({
        method:'get',
        url:`https://api.openweathermap.org/data/2.5/forecast?q=${city},${county_code}&APPID=4360776cb4bc583cf137a178860aae0c`,
      })
    //   console.log(result.data);
    return result.data.list
} 