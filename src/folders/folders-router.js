const path = require('path'),
  express = require('express'),
  xss = require('xss'),
  uuid = require('uuid'), //Use in /POST to create uuid for id.
  FoldersService = require('./folders-service'),
  foldersRouter = express.Router(),
  jsonParser = express.json();

foldersRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    FoldersService.getAllFolders(knexInstance)
      .then(folders => {
        res.json(folders);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { name } = req.body,
      newFolder = { name };

    for (const [key, value] of Object.entries(newFolder)) {
      if (value == null) {
        return res.status(400).json({
          error: { message: `Missing ${key} in request body` }
        });
      }
    }
    newFolder.id = uuid();

    FoldersService.insertFolder(req.app.get('db'), newFolder)
      .then(folder => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${folder.id}`))
          .json(folder);
      })
      .catch(next);
  });

module.exports = foldersRouter;
