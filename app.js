var express       = require('express'),
    app           = express(),
    routes        = require('./routes'),
    path          = require('path'),
    bodyParser    = require('body-parser'),
    multer        = require('multer'),
    session       = require('express-session'),
    cookieParser  = require('cookie-parser'),
    port          = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'safeGringo'
}));

app.set('view engine', 'ejs');
app.use(express.static('./public'));

// ROUTES
// ==============================================

app.use('/', routes.index);

// ==============================================

app.listen(port, function() {
    console.log('safeGringo on port ' + port);
});
