# Noteful App

Whoopee.

## Process

### Server Set-Up

- Run expressclone.
- Create dbs
- Install pg and postgrator-cli (devDependency) for SQL migration
- Install knex and xss for testing and server utility.
- Update .env with DB and TESTDB URLs. (postgresql://localhost/username@dbname)
- Modify server.js to require knex and create the const `db`, which establishes a client (pg) and connection (DB_URL) for knex. Call DB_URL from `require('./config')` and inject into app with `app.set` before the listen:

```javascript
const knex = require('knex');
...
const { PORT, DB_URL } = require('./config');

const db = knex({
  client: 'pg',
  connection: DB_URL
});

app.set('db', db);
...

```

- Write `postgrator-config.js`

```javascript
require('dotenv').config();

module.exports = {
  "migrationsDirectory": "migrations",
  "driver": "pg",
  "connectionString": (process.env.NODE_ENV === 'test')
    ? process.env.TEST_DB_URL
    : process.env.DB_URL,
};
```

- Update package.json scripts with migrate and migrate:test.

    `"migrate": "postgrator --config postgrator-config.js",`

    `"migrate:test": "env NODE_ENV=test npm run migrate",`

### DB Design and Migration

- Sketch ERD structure. Consider foreign key constraints, normalizing, one-to-many vs. many-to-many. Do I need a relationship table? Do I need to alter tables for foreign references?
- Write initial migrations to create tables. Iterate to test out your database ERD.
- Write a seed file following the structure to run tests with down the road (can you pull this from front end?).

### Service Objects

- Create directories and NAME-service.js files for each object.
- Determine necessary CRUD operations and write functions that will interact as expected with the database.

### Routers

- Add NAME-router.js files for each directory (In my bash, I wrote a script (routerreq NAME), which generates a `NAME-router.js` file with all the required constants). Create `NAME-endpoints.spec.js` and `NAME.fixtures.js` files in test directory for each object.

```javascript
const express = require('express'),
  xss = require('xss'),
  FoldersService = require('./folders-service'),
  foldersRouter = express.Router(),
  jsonParser = express.json();
```

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
