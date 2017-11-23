'use strict';
var dataProvider = require('../../data/tag/all.js');
/**
 * Operations on /tag/all
 */
module.exports = {
    /**
     * summary: 
     * description: Tag all devices
     * parameters: x-pushbots-appid, x-pushbots-secret, body
     * produces: application/json
     * responses: 200, 202, 400, 401
     */
    put: function tagAll(req, res, next) {
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
