const expect = require('chai').expect;
const nock = require('nock');

const getUser = require('../testing').getUser;
const getLocation = require('../utils/location');
const response = require('./response');
const locationRes = require('./locationRes');


