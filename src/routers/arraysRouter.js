const arraysController = require('./../controllers/arraysControllers');
const express = require('express');

const router = express.Router();

router
  .post('/element-at-index/:index', arraysController.elementAtID)
  .post('/to-string', arraysController.toString)
  .post('/append', arraysController.append)
  .post('/starts-with-vowel', arraysController.startsWithVowel)
  .post('/remove-element', arraysController.removeElement);

module.exports = router;
