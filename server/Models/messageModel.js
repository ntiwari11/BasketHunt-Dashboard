import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
    chatId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'chat',
        required: true

    },
    senderId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user',
        required: true
    },
    text:{
        type: String,
    },
    edited: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true,
    })

const Message = mongoose.model('message', messageSchema);
module.exports = Message;