'use strict';
var dataProvider = require('../../data/2/subscriptions.js');
/**
 * Operations on /2/subscriptions
 */
module.exports = {
    /**
     * summary: 
     * description: Creates new subscription object, it should be called once device token is available to register the device on PushBots for the first time.
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 200, 201
     */
    post: function addSub(req, res, next) {
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
