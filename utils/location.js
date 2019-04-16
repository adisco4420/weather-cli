const axios = require('axios');

module.exports = async () => {
    const result = await axios({
        method:'get',
        url:'  https://api.ipdata.co?api-key=efe8e0ab8299391f9cad631dc04e82408c1d031f601489221de1757b',
      })
      const { city, country_code } = result.data;
  return {
      city,
      country_code
  }

}

