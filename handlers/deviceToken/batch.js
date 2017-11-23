'use strict';
var dataProvider = require('../../data/deviceToken/batch.js');
/**
 * Operations on /deviceToken/batch
 */
module.exports = {
    /**
     * summary: 
     * description: Insert up to 500 devices into database.
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 201, 400, 401, 409
     */
    put: function regDevices(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['put']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
