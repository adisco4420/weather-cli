const expect = require('chai').expect;
const getLocation = require('../utils/location');
describe('Test Location API', () => {
    it('expect res type to equal object', () => {
      return getLocation().then(res => {
          expect(typeof res).to.equal('object');
      })
    });
    it('expect county code to be NG', () => {
      return getLocation().then(res => {
          expect(res.country_code).to.equal('NG');
      })
    });
    it('expect city to be Lagos', () => {
      return getLocation().then(res => {
          expect(res.city).to.equal('Lagos');
      })
    });
  });