'use strict';
var dataProvider = require('../../data/tag/expiry.js');
/**
 * Operations on /tag/expiry
 */
module.exports = {
    /**
     * summary: 
     * description: Time device tag.
     * parameters: Content-Type, x-pushbots-appid, x-pushbots-secret, body
     * produces: application/json
     * responses: 201, 400, 401, 409
     */
    put: function timeTag(req, res, next) {
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
