const chatModel = require("../Models/chatModel.js");

exports.createChat=async(req,res)=>{
    const newChat= new chatModel({
        members: [req.body.senderId, req.body.receiverId,],
    });

    try {
        const chat = await chatModel.findOne({
            members:{$all:[req.body.senderId, req.body.receiverId,]}
        })
        if (chat) return res.status(200).json(chat);
        
        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.deleteChat=async(req,res)=>{
    try
    {
        const deleteCount = await chatModel.deleteOne({_id: req.params.id});
        res.status(200).json({...deleteCount,deleteChat:req.params.id})  
        
    } catch (error) {
        res.status(500).json(error);
    }
}