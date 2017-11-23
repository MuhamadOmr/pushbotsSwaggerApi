'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /2/getApps
 */
module.exports = {
    /**
     * summary: 
     * description: Get list of applications.
     * parameters: x-pushbots-token
     * produces: application/json
     * responses: 200
     * operationId: getApps
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/getApps',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
