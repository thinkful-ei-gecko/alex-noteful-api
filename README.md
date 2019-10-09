# Noteful App

Whoopee.

## Process

### Server Set-Up

- Run expressclone.
- Create dbs
- Install pg and postgrator-cli (devDependency) for SQL migration
- Install knex and xss for testing.
- Update .env with DB and TESTDB URLs. (postgresql://localhost/username@dbname)
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
- Write initial migrations to create tables. Iterate to test out your database erd.

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.
