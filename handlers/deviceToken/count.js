'use strict';
var dataProvider = require('../../data/deviceToken/count.js');
/**
 * Operations on /deviceToken/count
 */
module.exports = {
    /**
     * summary: 
     * description: GET Device Tokens count.
     * parameters: x-pushbots-appid, x-pushbots-secret, platform
     * produces: application/json
     * responses: 200, 400, 401, 409
     */
    get: function getCount(req, res, next) {
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
