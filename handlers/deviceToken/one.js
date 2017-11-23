'use strict';
var dataProvider = require('../../data/deviceToken/one.js');
/**
 * Operations on /deviceToken/one
 */
module.exports = {
    /**
     * summary: 
     * description: Retrieve Single device data.
     * parameters: x-pushbots-appid, token
     * produces: application/json
     * responses: 200, 202, 400, 401, 409
     */
    get: function getone(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
