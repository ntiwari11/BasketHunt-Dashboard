import express from "express";
const router = express.Router();
import { createMessage, getMessages,deleteOneMessage } from "../../controllers/messageController.js";

router.post("/createMessage", createMessage);
router.get("/getMessages/:chatId", getMessages);
router.delete("/deleteOneMessage/:id", deleteOneMessage);

export default router;