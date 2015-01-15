var express = require('express'),
    methodOverride = require('method-override'),
    compression = require('compression'),
    path = require('path'),
    //sqlinit = require('./server/sqlinit'),

    // App modules
    //offers = require('./server/offers'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(compression());
app.use(methodOverride());

app.use(express.static(path.join(__dirname, './www')));

app.use(function(err, req, res, next) {
    console.log(err.stack);
    res.send(500, err.message);
});

//app.get('/users/me', auth.validateToken, users.getProfile);
//app.get('/offers', auth.validateToken, offers.getAll);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});