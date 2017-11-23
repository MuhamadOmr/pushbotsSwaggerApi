var mongoose = require("mongoose");

var subscriptionSchema = mongoose.Schema({

    uuid: {
        type: String,
        required: true

    },
    token: {
        type:    String,
        requied: true
    },
    platform: {
        type:    Number,
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

var Subscription = mongoose.model("Subscription",subscriptionSchema);

module.exports = {Subscription: Subscription};