var mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs');

mongoose.connect('mongodb://localhost/basic_db/users');
mongoose.Promise = global.Promise;

var modelsPath = path.join(__dirname, '../models');
fs.readdirSync(modelsPath).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(path.join(modelsPath, file));
  }
})
