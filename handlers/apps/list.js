'use strict';
var dataProvider = require('../../data/apps/list.js');
/**
 * Operations on /apps/list
 */
module.exports = {
    /**
     * summary: 
     * description: Retrieve All Apps of user. 
     * parameters: x-pushbots-uid, x-pushbots-apikey
     * produces: application/json
     * responses: 200, 202, 400
     */
    get: function getAllapps(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
