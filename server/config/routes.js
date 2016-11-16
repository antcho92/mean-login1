var users = require('./../controllers/users.js')

module.exports = function(app) {
  app.get('/users', users.index);
  app.post('/users', users.create);
  app.post('/users/login', users.login);
  app.get('/users/logout', users.logout);
  app.get('/users/checkSess', users.checkSess)
}
