mongoose = require("mongoose");

var deviceSchema = mongoose.Schema({


    uuid: {
        type: String,

    },
    token: {
        type: String,
        required:true
    },
    platform: {
        type: Number,
        required:true
    },
    key: {
        type: String
    },
    tags: {
        type: [String]
    },
    timeZone: {
        type: String
    },
    alias: {
        type: String
    },
    countryCode: {
        type: Number
    },
    badge: {
        type: String
    },
    lcoation: {
        type: [Number]
    },
    metrics: {
        carrier: {
            type: String
        },
        osVersion: {
            type: Number
        },
        resolution: {
            type: String
        },
        appVersion: {
            type: String
        },
        locale: {
            type: String
        },
        PushBotslibVersion: {
            type: String
        },
        jailbroken: {
            type: Boolean
        },
    },
});

var Device = mongoose.model("Device",deviceSchema);

module.exports = {Device: Device};

