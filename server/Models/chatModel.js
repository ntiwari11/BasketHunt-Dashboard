import mongoose from "mongoose"
const chatSchema = mongoose.Schema({
    members:{type:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    ]}, 
}, {
    timestamps: true
})

const Chat = mongoose.model('chat', chatSchema);
module.exports=Chat;