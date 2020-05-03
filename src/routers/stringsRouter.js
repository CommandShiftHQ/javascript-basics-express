const stringsController = require('./../controllers/stringsControllers');
const express = require('express');

const router = express.Router();

router
  .get('/hello/:string', stringsController.hello)
  .get('/upper/:string', stringsController.upper)
  .get('/lower/:string', stringsController.lower)
  .get('/first-characters/:string', stringsController.firstCharacter);

module.exports = router;
