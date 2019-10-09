const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');

const {
    makeFoldersArray,
    addMaliciousFolder,
    dateParse
  } = require('./folders.fixtures'),
  { makeUsersArray } = require('./users.fixtures');

describe('Folders Endpoints', function() {
  let db;
})