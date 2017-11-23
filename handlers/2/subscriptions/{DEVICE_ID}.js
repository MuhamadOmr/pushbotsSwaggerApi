'use strict';
var dataProvider = require('../../../data/2/subscriptions/{DEVICE_ID}.js');
/**
 * Operations on /2/subscriptions/{DEVICE_ID}
 */
module.exports = {
    /**
     * summary: 
     * description: Update subscription object, must include at least 1 parameter to update. (last session date and sessions count wil be updated with this method).
     * parameters: x-pushbots-appid, Content-Type, DEVICE_ID, body
     * produces: application/json
     * responses: 200
     */
    put: function updateSub(req, res, next) {
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
    },
    /**
     * summary: 
     * description: Retrieve Subscription.
     * parameters: x-pushbots-appid, DEVICE_ID
     * produces: application/json
     * responses: 200, 401
     */
    get: function getSub(req, res, next) {
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
    },
    /**
     * summary: 
     * description: Delete Subscription from PushBots.
     * parameters: x-pushbots-appid, DEVICE_ID
     * produces: application/json
     * responses: 200, 401
     */
    delete: function deleteSub(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
