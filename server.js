var express = require('express'),
    bp = require('body-parser'),
    path = require('path'),
    port = process.env.PORT || 8080,
    session = require('express-session');

var app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bp.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
