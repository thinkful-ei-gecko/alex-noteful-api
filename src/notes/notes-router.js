const express = require('express'),
  xss = require('xss'),
  NotesService = require('./notes-service'),
  foldersRouter = express.Router(),
  jsonParser = express.json();

