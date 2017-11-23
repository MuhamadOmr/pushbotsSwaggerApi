'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /deviceToken/alias
 */
module.exports = {
    /**
     * summary: 
     * description: GET Device count by alias.
     * parameters: Content-Type, x-pushbots-appid, body
     * produces: application/json
     * responses: 200, 400, 409
     * operationId: getCountbyalias
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/alias',
                operation: 'post',
                response: '200'
            }, callback);
        },
        400: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/alias',
                operation: 'post',
                response: '400'
            }, callback);
        },
        409: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/deviceToken/alias',
                operation: 'post',
                response: '409'
            }, callback);
        }
    }
};
