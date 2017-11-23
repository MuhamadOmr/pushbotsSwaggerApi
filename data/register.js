'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /register
 */
module.exports = {
    /**
     * summary: 
     * description: Add new device to database
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 200, 201, 400, 401, 409
     * operationId: regDevice
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/register',
                operation: 'put',
                response: '200'
            }, callback);
        },
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/register',
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
                path: '/register',
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
                path: '/register',
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
                path: '/register',
                operation: 'put',
                response: '409'
            }, callback);
        }
    }
};
