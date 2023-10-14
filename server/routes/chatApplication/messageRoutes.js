import express from "express";
const router = express.Router();
// middleware
import {
  authorizeRolesAdmin,
  isAuthenticatedUsers,
} from "../../middleware/authMiddleware";
import {
  createMessage,
  getMessages,
  deleteOneMessage,
} from "../../controllers/chatApplication/messageController";

router.post("/createMessage", isAuthenticatedUsers, createMessage);
router.get("/getMessages/:chatId", isAuthenticatedUsers, getMessages);
router.delete(
  "/deleteOneMessage/:messageId",
  isAuthenticatedUsers,
  deleteOneMessage
);

export default router;
