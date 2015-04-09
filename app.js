var express = require('express');
var errorHandler = require('errorhandler');
var path = require('path');

// make it easy to test
var app = module.exports = express();
// var webRouter = require('./routes/web');

app.set('port', process.env.PORT || 3000);

// app.use('/', webRouter);

// serve the static files
app.use(express.static(path.join(__dirname, 'public')));


app.get('/app', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/app.html'));
});

app.get('/app/page1', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/page1.html'));
});

app.get('/app/page2', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/views/page2.html'));
});



// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
    app.use(errorHandler());
}

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});