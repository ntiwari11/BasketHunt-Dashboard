import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Database connection import
import connectDb from "./database/connection";
// importing routes
import userRoutes from "./routes/user/userRoutes";
import adminRoutes from "./routes/admin/adminRoutes";
import dashboardRoutes from "./routes/admin/dashboardRoutes";
import chatRoutes from "./routes/chat/chatRoute"
const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());

// Routing
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome To The BasketHunt Chat app Server",
  });
});
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/chat",chatRoutes);

//const PORT = 4000;

app.listen(process.env.PORT|| 4000, () => {
  connectDb()
    .then(() => {
      console.log(
        `Server is Running on http://localhost:${process.env.PORT}\nDatabase Connected Successfully.....`
      );
    })
    .catch((error) => {
      console.log("Server is running but Database Connection Failed.");
      console.log(error);
    });
  // console.log(`Server is Running on http://localhost:${PORT}`);
});
