'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /tag/all
 */
module.exports = {
    /**
     * summary: 
     * description: Tag all devices
     * parameters: x-pushbots-appid, x-pushbots-secret, body
     * produces: application/json
     * responses: 200, 202, 400, 401
     * operationId: tagAll
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tag/all',
                operation: 'put',
                response: '200'
            }, callback);
        },
        202: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tag/all',
                operation: 'put',
                response: '202'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tag/all',
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
                path: '/tag/all',
                operation: 'put',
                response: '401'
            }, callback);
        }
    }
};
