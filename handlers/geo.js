'use strict';
var dataProvider = require('../data/geo.js');
/**
 * Operations on /geo
 */
module.exports = {
    /**
     * summary: 
     * description: update the geo for a device
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 200, 400, 401, 409
     */
    put: function setGeo(req, res, next) {
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
