const Mustache = require('mustache');
const fs = require('fs');
const async = require('async');

module.exports = {
    toFile: function (templatePath, context, outputPath, callback) {
        async.waterfall([
            function (done) {
                // technically i could read the mustache template once and then render over and over
                fs.readFile(templatePath, 'utf8', function (err, file) {
                    const compiled = Mustache.render(file, context);

                    done(err, compiled);
                });
            },
            function (renderedTemplate, done) {
                return fs.appendFile(outputPath, renderedTemplate, 'utf8', function (err) {
                    return done(err, {path: outputPath});
                });
            }
        ], function (err, result) {
            callback(err, result.path);
        });
    }
};
