'use strict';
var dataProvider = require('../../data/deviceToken/alias.js');
/**
 * Operations on /deviceToken/alias
 */
module.exports = {
    /**
     * summary: 
     * description: GET Device count by alias.
     * parameters: Content-Type, x-pushbots-appid, body
     * produces: application/json
     * responses: 200, 400, 409
     */
    post: function getCountbyalias(req, res, next) {
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
