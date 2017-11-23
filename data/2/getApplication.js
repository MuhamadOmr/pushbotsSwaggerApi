'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /2/getApplication
 */
module.exports = {
    /**
     * summary: 
     * description: Get Application data by Id.
     * parameters: x-pushbots-appid, x-pushbots-token
     * produces: application/json
     * responses: 200
     * operationId: getApp
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/getApplication',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
