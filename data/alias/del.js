'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /alias/del
 */
module.exports = {
    /**
     * summary: 
     * description: remove device&#39;s alias
     * parameters: Content-Type, x-pushbots-appid, x-pushbots-secret, body
     * produces: application/json
     * responses: 200, 400, 401, 409
     * operationId: remAlias
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/alias/del',
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
                path: '/alias/del',
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
                path: '/alias/del',
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
                path: '/alias/del',
                operation: 'put',
                response: '409'
            }, callback);
        }
    }
};
