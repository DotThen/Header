const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker');
let HeaderDB = require('../database/index.js');

express()
  .use(bodyParser.json())
  .get('/artist/:artistID', (req, res) => res.send('Hello World!'))
  .post('/')
  .listen(3004, () => console.log('SPOTIFY HEADER listening on port 3004!'));
