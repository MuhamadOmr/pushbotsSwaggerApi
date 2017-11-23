'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /debug
 */
module.exports = {
    /**
     * summary: 
     * description: update the debug value
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 200, 400, 401, 409
     * operationId: setDebug
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/debug',
                operation: 'put',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/debug',
                operation: 'put',
                response: '400'
            }, callback);
        },
        401: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/debug',
                operation: 'put',
                response: '401'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/debug',
                operation: 'put',
                response: '409'
            }, callback);
        }
    }
};
