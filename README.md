# todoapp
[SELF EDUCATION][MVP] ToDo App

## FEATURES : 
- authentication&registration    
- notes
- todos
- self-diagnostics
- dynamic procedured graphics

This is a nicely - looking app for making one's life easier:
Management of personal tasks, notes supported with fancy graphics, 
which are procedurally provided by a self-diagnosis module.

Self-Diagnosis module - is the most complex part of the project:
Person estimates one's 12 spheres of life and gets to know better
what one doesn't mention but need to in so that his life would achieve
a better balance.

## INSTALLATION :
- Install psql; 
- Insert tables from ./server/data.sql into db;
- Insert db and user data into ./server/.env;
### From ./ :
- npm install;
### IN DIFFERENT TERMINAL WINDOWS:
```
npm run server;
npm run client;
```
## TODO:
- automated installation
- refactor server api globals into .env
- restyle todos a little bit