'use strict';
var dataProvider = require('../../data/2/createApplication.js');
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
     */
    post: function createApp(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
