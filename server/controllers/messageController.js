const messageModel = require("../Models/messageModel.js");

//create a new message
exports.createMessage = async (req, res) => {
    const { chatId, senderId, text } = req.body

    const newMessage = new messageModel({
        chatId,
        senderId,
        text,
        edited: false,
    });

    try {
        const result = await newMessage.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Delete specific message based on chat Id
exports.getMessages = async (req, res) => {
    const { chatId } = req.params
    try {
        const result = await messageModel.find({ chatId });
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

//Delete specific message based on message Id
exports.deleteOneMessage=async(req,res)=>{
    const {id}=req.params
    try {
        const deleteCount=await messageModel.deleteOne({_id:id})
        res.status(200).json({id})
    } catch (error) {
        res.status(500).json(error)
    }
}