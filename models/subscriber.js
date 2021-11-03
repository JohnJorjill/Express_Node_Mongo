const mongoose = require('mongoose')

const subscriberScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedToChannel:{
        type: String,
        requried: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberScehma)