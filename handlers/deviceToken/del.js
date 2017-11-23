'use strict';
var dataProvider = require('../../data/deviceToken/del.js');
/**
 * Operations on /deviceToken/del
 */
module.exports = {
    /**
     * summary: 
     * description: Remove deivce from database.
     * parameters: x-pushbots-appid, Content-Type, body
     * produces: application/json
     * responses: 200, 400, 401, 409
     */
    put: function delDevice(req, res, next) {
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
