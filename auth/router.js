'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const {User} = require('../users/models');
const config = require('../config');
const router = express.Router();


router.use(bodyParser.json());
// The user provides a username and password to login
router.get('/login/:username', (req, res) => {
   User
   .findOne({username: req.params.username})
   .then(user => {res.json(user)})
   .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'something went terribly wrong' });
    });
});
