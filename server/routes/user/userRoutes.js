import express from "express";
const router = express.Router();
import { userWelcome,allUsers } from "../../controllers/user/userController.js";

router.get("/", userWelcome);
router.get('/getAllUser', allUsers);

// router.post("/login",)
export default router;
