'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /deviceToken/count
 */
module.exports = {
    /**
     * summary: 
     * description: GET Device Tokens count.
     * parameters: x-pushbots-appid, x-pushbots-secret, platform
     * produces: application/json
     * responses: 200, 400, 401, 409
     * operationId: getCount
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/count',
                operation: 'get',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/count',
                operation: 'get',
                response: '400'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/count',
                operation: 'get',
                response: '401'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/count',
                operation: 'get',
                response: '409'
            }, callback);
        }
    }
};
