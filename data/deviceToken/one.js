'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /deviceToken/one
 */
module.exports = {
    /**
     * summary: 
     * description: Retrieve Single device data.
     * parameters: x-pushbots-appid, token
     * produces: application/json
     * responses: 200, 202, 400, 401, 409
     * operationId: getone
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/one',
                operation: 'get',
                response: '200'
            }, callback);
        },
        202: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/one',
                operation: 'get',
                response: '202'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/one',
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
                path: '/deviceToken/one',
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
                path: '/deviceToken/one',
                operation: 'get',
                response: '409'
            }, callback);
        }
    }
};
