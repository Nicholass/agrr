module.exports = function (mongoose, config, loggerFactory, dbSchemaList) {
    var log = loggerFactory(module);

    var dbURI = config.get('db:connection') + '/' + config.get('db:name');

    function connect2db(callback) {
        mongoose.connect(dbURI);
        var db = mongoose.connection;

        db.on('error', function (err) {
            log.error('Database ' + dbURI + ' connection error: ', err);
        });
        db.once('open', function callback() {
            log.info('Connected to database ' + dbURI)
        });
        callback();
    }




    return {
        connect2db: connect2db
    }

};