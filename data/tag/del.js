'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /tag/del
 */
module.exports = {
    /**
     * summary: 
     * description: Delete device tag.
     * parameters: Content-Type, x-pushbots-appid, body
     * produces: application/json
     * responses: 200, 202, 400, 409
     * operationId: delTags
     */
    put: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tag/del',
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
                path: '/tag/del',
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
                path: '/tag/del',
                operation: 'put',
                response: '400'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/tag/del',
                operation: 'put',
                response: '409'
            }, callback);
        }
    }
};
