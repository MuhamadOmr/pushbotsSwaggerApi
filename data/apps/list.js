'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /apps/list
 */
module.exports = {
    /**
     * summary: 
     * description: Retrieve All Apps of user. 
     * parameters: x-pushbots-uid, x-pushbots-apikey
     * produces: application/json
     * responses: 200, 202, 400
     * operationId: getAllapps
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/apps/list',
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
                path: '/apps/list',
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
                path: '/apps/list',
                operation: 'get',
                response: '400'
            }, callback);
        }
    }
};
