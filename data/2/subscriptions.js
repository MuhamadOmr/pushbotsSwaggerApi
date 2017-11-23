'use strict';
var Mockgen = require('../mockgen.js');
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
     * operationId: addSub
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions',
                operation: 'post',
                response: '200'
            }, callback);
        },
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions',
                operation: 'post',
                response: '201'
            }, callback);
        }
    }
};
