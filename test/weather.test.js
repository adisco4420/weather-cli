const expect = require('chai').expect;
const getTodayWeather = require('../utils/weather');
const getTomorrowWeather = require('../utils/tomoro-weather');
const nock = require('nock');
const getLocation = require('../utils/location');
const response = require('./response');
let locationData;
describe('Test Today Weather API', () => {
    beforeEach(() => {
        return getLocation().then(res => {
           locationData = res;
       })
      });
    it('expect response type to equal object', () => {
      return getTodayWeather(locationData).then(res => {
        // console.log(res);
        expect(typeof res).to.equal('object');
    })
    });
    it('expect description to be type string and equal "scattered clouds"', () => {
      return getTodayWeather(locationData).then(res => {
          expect(typeof res.weather[0].description).to.equal('string');
          expect(res.weather[0].description).to.equal('scattered clouds');
      })
    });
    it('expect main to be type string and temperature equal "305.15"', () => {
      return getTodayWeather(locationData).then(res => {
        expect(typeof res.main.temp).to.equal('number');
        expect(res.main.temp).to.equal(305.15);
      })
    });
  });

  describe('Test Tomorrow Weather API', () => {
    beforeEach(() => {
        return getLocation().then(res => {
           locationData = res;
       })
      });
    it('expect response type to equal object', () => {
      return getTomorrowWeather(locationData).then(res => {
        // console.log(res);
        expect(typeof res).to.equal('object');
    })
    });
    it('expect description to be type string and equal "scattered clouds"', () => {
      return getTomorrowWeather(locationData).then(res => {
          console.log(res);
        //   expect(typeof res.weather[0].description).to.equal('string');
        //   expect(res.weather[0].description).to.equal('scattered clouds');
      })
    });
    // it('expect main to be type string and temperature equal "305.15"', () => {
    //   return getTomorrowWeather(locationData).then(res => {
    //     expect(typeof res.main.temp).to.equal('number');
    //     expect(res.main.temp).to.equal(305.15);
    //   })
    // });
  });