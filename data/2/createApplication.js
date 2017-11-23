'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /2/createApplication
 */
module.exports = {
    /**
     * summary: 
     * description: Create new application.
     * parameters: x-pushbots-api-token, Content-Type, body
     * produces: application/json
     * responses: 200
     * operationId: createApp
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/2/createApplication',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
