'use strict';
var dataProvider = require('../../data/alias/del.js');
/**
 * Operations on /alias/del
 */
module.exports = {
    /**
     * summary: 
     * description: remove device&#39;s alias
     * parameters: Content-Type, x-pushbots-appid, x-pushbots-secret, body
     * produces: application/json
     * responses: 200, 400, 401, 409
     */
    put: function remAlias(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['put']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
