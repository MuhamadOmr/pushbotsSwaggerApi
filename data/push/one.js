'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /push/one
 */
module.exports = {
    /**
     * summary: 
     * description: Push a notification to a single device
     * parameters: x-pushbots-appid, x-pushbots-secret, Content-Type, body
     * produces: application/json
     * responses: 200
     * operationId: pushOne
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/push/one',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
