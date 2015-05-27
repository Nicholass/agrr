module.exports = function (express, config, loggerFactory, bodyParser) {
    var log = loggerFactory(module);

    var app = express();

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
        db.initModels(path.join(__dirname, "app", "models"), function (err, data) {

            log.info("All the models are initialized");

            app.listen(config.get('port'), function () {
                log.info("App running on port: " + config.get('port'));
            });
        });
    }

    return {
        run: run
    }
};