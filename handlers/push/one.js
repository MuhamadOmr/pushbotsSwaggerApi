'use strict';
var dataProvider = require('../../data/push/one.js');
/**
 * Operations on /push/one
 */
module.exports = {
    /**
     * summary: 
     * description: Push a notification to a single device
     * parameters: x-pushbots-appid, x-pushbots-secret, Content-Type, body
     * produces: application/json
     * responses: 200
     */
    post: function pushOne(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
