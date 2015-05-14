var express         = require('express');
var path            = require('path');
var log             = require('./lib/log')(module);
var config          = require('./lib/config');
var PlacesModel     = require('./lib/mongoose').PlacesModel;
var bodyParser      = require('body-parser');

var app = express();

//app.use(express.favicon()); // отдаем стандартную фавиконку, можем здесь же свою задать
//app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use(express.methodOverride()); // поддержка put и delete
//app.use(app.router); // модуль для простого задания обработчиков путей
app.use(express.static(path.join(__dirname, "html")));

app.get('/api', function (req, res) {
    res.send('API is running');
});

app.listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});

app.get('/api/places', function(req, res) {
    return PlacesModel.find(function (err, articles) {
        if (!err) {
            return res.send(articles);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    });
});

app.post('/api/places', function(req, res) {
    log.debug('Incoming request:', req.body);
    var place = new PlacesModel({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        images: req.body.images,
        coordinates: [req.body.lon, req.body.lat]
    });

    place.save(function (err) {
        if (!err) {
            log.info("Place '" + place.title + "'created");
            return res.send({ status: 'OK', place:place });
        } else {
            console.log(err);
            if(err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation error' });
            } else {
                res.statusCode = 500;
                res.send({ error: 'Server error' });
            }
            log.error('Internal error(%d): %s',res.statusCode,err.message);
        }
    });
});

app.get('/api/places/:id', function(req, res) {
    res.send('This is not implemented now');
});

app.put('/api/places/:id', function (req, res){
    res.send('This is not implemented now');
});

app.delete('/api/places/:id', function (req, res){
    res.send('This is not implemented now');
});

app.get('/api/places/:id/comments/:commentId', function(req, res) {
    res.send('This is not implemented now');
});

app.post('/api/places/:id/comments/', function (req, res){
    res.send('This is not implemented now');
});

app.delete('/api/places/:id/comments/:commentId', function (req, res){
    res.send('This is not implemented now');
});

// Error
app.use(function(req, res, next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

app.get('/500', function(req, res, next){
    next(new Error('Random error!'));
});
