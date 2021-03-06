'use strict';
var dataProvider = require('../../data/2/getApps.js');
/**
 * Operations on /2/getApps
 */
module.exports = {
    /**
     * summary: 
     * description: Get list of applications.
     * parameters: x-pushbots-token
     * produces: application/json
     * responses: 200
     */
    get: function getApps(req, res, next) {
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
