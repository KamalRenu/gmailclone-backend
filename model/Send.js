const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sendSchema = new Schema({
    email:{
        type:String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
});

const Send=mongoose.model('Send', sendSchema, 'send');
module.exports = Send;