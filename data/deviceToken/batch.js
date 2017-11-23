'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /deviceToken/batch
 */
module.exports = {
    /**
     * summary: 
     * description: Insert up to 500 devices into database.
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 201, 400, 401, 409
     * operationId: regDevices
     */
    put: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/batch',
                operation: 'put',
                response: '201'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/batch',
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
                path: '/deviceToken/batch',
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
                path: '/deviceToken/batch',
                operation: 'put',
                response: '409'
            }, callback);
        }
    }
};
