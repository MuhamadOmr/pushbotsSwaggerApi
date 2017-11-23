'use strict';
var dataProvider = require('../../data/2/getApplication.js');
/**
 * Operations on /2/getApplication
 */
module.exports = {
    /**
     * summary: 
     * description: Get Application data by Id.
     * parameters: x-pushbots-appid, x-pushbots-token
     * produces: application/json
     * responses: 200
     */
    get: function getApp(req, res, next) {
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
