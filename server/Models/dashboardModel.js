import mongoose from "mongoose";
const dashboardSchema = mongoose.Schema(
  // {
  //   app: {
  //     appName: {
  //       type: String,
  //       required: true,
  //     },
  //     appLogo: {
  //       type: String,
  //     },
  //     appLink: {
  //       type: String,
  //     },
  //   },
  // },
  {
    appname: { type: String, required: true },
    applogo: { type: String },
    applink: { type: String },
  },
  { timestamps: true }
);

const Dashboard = mongoose.model("Dashboard", dashboardSchema);

module.exports = Dashboard;
