'use strict';
var Mockgen = require('../../mockgen.js');
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
     * operationId: updateSub
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions/{DEVICE_ID}',
                operation: 'put',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Retrieve Subscription.
     * parameters: x-pushbots-appid, DEVICE_ID
     * produces: application/json
     * responses: 200, 401
     * operationId: getSub
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions/{DEVICE_ID}',
                operation: 'get',
                response: '200'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions/{DEVICE_ID}',
                operation: 'get',
                response: '401'
            }, callback);
        }
    },
    /**
     * summary: 
     * description: Delete Subscription from PushBots.
     * parameters: x-pushbots-appid, DEVICE_ID
     * produces: application/json
     * responses: 200, 401
     * operationId: deleteSub
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions/{DEVICE_ID}',
                operation: 'delete',
                response: '200'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/subscriptions/{DEVICE_ID}',
                operation: 'delete',
                response: '401'
            }, callback);
        }
    }
};
