import mongoose from "mongoose"
const chatSchema = mongoose.Schema({
    members:{type:[
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'user',
            required: true
        },
        {
            type: mongoose.Schema.Types.ObjectId, ref: 'user',
            required: true
        },
    ]}, 
}, {
    timestamps: true
})

const Chat = mongoose.model('chat', chatSchema);
module.exports=Chat;