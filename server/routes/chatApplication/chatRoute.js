import express from "express";
const router = express.Router();
// middleware
import {
  authorizeRolesAdmin,
  isAuthenticatedUsers,
} from "../../middleware/authMiddleware";

import {
  createChat,
  deleteChat,
  getAllChats,
} from "../../controllers/chatApplication/chatController.js";

//Routes for Admin and Users both
router.post("/createChat", isAuthenticatedUsers, createChat);
router.get("/getchats", isAuthenticatedUsers, getAllChats);
router.delete("/deleteChat/:id", isAuthenticatedUsers, deleteChat);
export default router;
