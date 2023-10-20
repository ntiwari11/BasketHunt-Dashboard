import chatModel from "../../Models/chatApplication/chatModel.js";
import User from "../../Models/userModel.js";

/**
 *  @Routes :
 *  @description: Creating one to one chat
 */
exports.createChat = async (req, res) => {
  const { userId } = req.body;
  // this case will never run
  if (!userId) {
    // console.log("UserId param not sent with request");
    return res.sendStatus(400);
  }
  // checking any chat available or not
  var isChat = await chatModel
    .find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name pic email",
  });

  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };

    try {
      const createdChat = await chatModel.create(chatData);
      const FullChat = await chatModel
        .findOne({ _id: createdChat._id })
        .populate("users", "-password");
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
};

/**
 *  @Routes :
 *  @description: Deleting the chat application
 */
exports.deleteChat = async (req, res) => {
  try {
    const deleteCount = await chatModel.deleteOne({ _id: req.params.id });
    res
      .status(200)
      .json({ success: true, ...deleteCount, deleteChat: req.params.id });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

/**
 *  @Routes :
 *  @description: Getting all chats for a user and admin
 */

exports.getAllChats = async (req, res) => {
  try {
    chatModel
      .find({ users: { $elemMatch: { $eq: req.user._id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name pic email",
        });
        res.status(200).json({ success: true, results });
      });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
