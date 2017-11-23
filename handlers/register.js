'use strict';
var dataProvider = require('../data/register.js');
/**
 * Operations on /register
 */
module.exports = {
    /**
     * summary: 
     * description: Add new device to database
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 200, 201, 400, 401, 409
     */
    put: function regDevice(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
