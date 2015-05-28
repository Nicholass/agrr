module.exports = function (app, config, loggerFactory, bodyParser) {
    var log = loggerFactory(module);

    app.use(bodyParser);

    app.use(function (err, req, res, next) {
        console.log(err.name);
        if (err.name == "ValidationError") {
            res.send(400, err);
        } else {
            next(err);
        }
    });


    app.use(function (err, req, res, next) {
        res.send(500, err);
    });

    function run(db) {
        //routes.setup(app, handlers);
        db.connect2db(function() {
            log.info("DB init");
        });

        app.listen(config.get('port'), function () {
            log.info("App running on port: " + config.get('port'));
        });
    }

    return {
        run: run
    }
};