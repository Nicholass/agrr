const _ = require('underscore');
const Q = require('q');

module.exports = function (mongoose, config, loggerFactory, dbSchemaList) {
    var log = loggerFactory(module);

    var dbURI = config.get('db:connection') + '/' + config.get('db:name');

    mongoose.connect(dbURI);
    var db = mongoose.connection;

    db.on('error', function (err) {
        log.error('Database ' + dbURI + ' connection error: ', err);
    });
    db.once('open', function callback() {
        log.info('Connected to database ' + dbURI)
    });

    var models = {};

    function initModels() {
        _.each(dbSchemaList, function(schema, schemaName) {
            Q.when(function() {
                models[schemaName] = mongoose.model(schemaName, schema);
            });
        });
    }

    function model(modelName) {
        var name = modelName.toLowerCase();
        if (typeof models[name] == "undefined") {
            throw "Model '" + name + "' is not exist";
        }
        return models[name];
    }

    return {
        initModels: initModels,
        model: model
    }

};