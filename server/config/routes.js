var users = require('./../controllers/users.js')

module.exports = function(app) {
  app.get('/users', users.index);
  app.post('/users', users.create);
  app.post('/users/login', users.login);
}
