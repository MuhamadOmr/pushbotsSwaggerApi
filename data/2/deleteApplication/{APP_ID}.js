'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /2/deleteApplication/{APP_ID}
 */
module.exports = {
    /**
     * summary: 
     * description: Remove application
     * parameters: x-pushbots-token, APP_ID
     * produces: application/json
     * responses: 200
     * operationId: deleteApps
     */
    delete: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/deleteApplication/{APP_ID}',
                operation: 'delete',
                response: '200'
            }, callback);
        }
    }
};
