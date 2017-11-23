'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /deviceToken/all
 */
module.exports = {
    /**
     * summary: 
     * description: Retrieve All Device Tokens data. 
     * parameters: x-pushbots-appid, x-pushbots-secret
     * produces: application/json
     * responses: 200, 400, 401
     * operationId: getAll
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/all',
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
                path: '/deviceToken/all',
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
                path: '/deviceToken/all',
                operation: 'get',
                response: '401'
            }, callback);
        }
    }
};
