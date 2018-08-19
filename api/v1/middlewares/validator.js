const { check } = require('express-validator/check');
/* eslint-disable*/
[
  check('title').isLength({ min: 8 }).withMessage('must be at least 8 chars long'),
  check('body').isLength({ min: 16 }).withMessage('must be at least 12 chars long'),
]; 

