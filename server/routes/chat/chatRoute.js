import express from "express";
const router = express.Router();
import { createChat,deleteChat } from "../../controllers/chatController.js";

router.post("/createChat", createChat);
router.delete("/deleteChat/:id", deleteChat);

export default router;