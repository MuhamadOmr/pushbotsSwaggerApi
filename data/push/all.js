'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /push/all
 */
module.exports = {
    /**
     * summary: 
     * description: Batch push notification
     * parameters: x-pushbots-appid, x-pushbots-secret, Content-Type, body
     * produces: application/json
     * responses: 200
     * operationId: pushBatch
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/push/all',
                operation: 'post',
                response: '200'
            }, callback);
        }
    }
};
