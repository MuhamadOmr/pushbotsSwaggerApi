'use strict';
var dataProvider = require('../../data/tag/del.js');
/**
 * Operations on /tag/del
 */
module.exports = {
    /**
     * summary: 
     * description: Delete device tag.
     * parameters: Content-Type, x-pushbots-appid, body
     * produces: application/json
     * responses: 200, 202, 400, 409
     */
    put: function delTags(req, res, next) {
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
