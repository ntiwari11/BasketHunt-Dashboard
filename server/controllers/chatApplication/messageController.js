import messageModel from "../../Models/chatApplication/messageModel";
import chatModel from "../../Models/chatApplication/chatModel";
import User from "../../Models/userModel";

//
/**
 *  @Routes :
 *  @description: create a new message
 */
exports.createMessage = async (req, res) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    // console.log("Invalid data passed into request");
    return res.sendStatus(400);
  }

  var newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await messageModel.create(newMessage);

    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name pic email",
    });

    await chatModel.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });

    res.json(message);
  } catch (error) {
    res.status(400).json({
      succss: false,
      message: error.message,
    });
    // throw new Error(error.message);
  }
};

/**
 *  @Routes :
 *  @description: Getting all messages for a particular chat
 */
exports.getMessages = async (req, res) => {
  try {
    const messages = await messageModel
      .find({ chat: req.params.chatId })
      .populate("sender", "name pic email");
    // .populate("chat");
    res.json(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
};

/**
 *  @Routes :
 *  @description: Delete specific message based on chat Id
 */

exports.deleteOneMessage = async (req, res) => {
  const { messageId } = req.params;
  try {
    const deleteCount = await messageModel.deleteOne({ _id: messageId });
    res.status(200).json({
      deleteCount,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
