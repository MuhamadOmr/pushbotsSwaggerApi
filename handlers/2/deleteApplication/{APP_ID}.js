'use strict';
var dataProvider = require('../../../data/2/deleteApplication/{APP_ID}.js');
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
     */
    delete: function deleteApps(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
