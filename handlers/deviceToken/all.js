'use strict';
var dataProvider = require('../../data/deviceToken/all.js');
/**
 * Operations on /deviceToken/all
 */
module.exports = {
    /**
     * summary: 
     * description: Retrieve All Device Tokens data. 
     * parameters: x-pushbots-appid, x-pushbots-secret
     * produces: application/json
     * responses: 200, 400, 401
     */
    get: function getAll(req, res, next) {
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
