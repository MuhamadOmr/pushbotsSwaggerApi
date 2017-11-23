'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /tag/expiry
 */
module.exports = {
    /**
     * summary: 
     * description: Time device tag.
     * parameters: Content-Type, x-pushbots-appid, x-pushbots-secret, body
     * produces: application/json
     * responses: 201, 400, 401, 409
     * operationId: timeTag
     */
    put: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tag/expiry',
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
                path: '/tag/expiry',
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
                path: '/tag/expiry',
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
                path: '/tag/expiry',
                operation: 'put',
                response: '409'
            }, callback);
        }
    }
};
