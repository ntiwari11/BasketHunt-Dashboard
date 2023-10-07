const Dashboard = require("../../Models/dashboardModel");

exports.getAllApps = async (req, res) => {
  try {
    const allApps = await Dashboard.find();
    if (!allApps) {
      return res.status(404).json({
        success: false,
        message: "No Apps Found",
      });
    }
    res.status(200).json({
      success: true,
      apps: allApps,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.createNewApp = async (req, res) => {
  try {
    const { appname, applogo, applink } = req.body;
    // if app name is not available
    if (!appname) {
      return res.status(400).json({
        message: "App is required.",
        success: false,
      });
    }
    // check the app is exist or not
    const isAppExist = await Dashboard.findOne({ appname });
    if (isAppExist) {
      return res.status(400).json({
        message: `${appname} is exist already`,
        success: false,
      });
    }
    const createdApp = await Dashboard.create({
      appname,
      applogo,
      applink,
    });

    const updatedData = await Dashboard.find();
    res.status(201).json({
      success: true,
      message: "App Created Succesfully",
      createdApp,
      apps: updatedData,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteApps = async (req, res) => {
  const { id } = req.body;
  const deletedApp = await Dashboard.deleteOne({
    _id: id,
  });

  if (!deletedApp) {
    return res.status(404).json({
      success: false,
      message: "app to be deleted not found",
    });
  }

  const updatedData = await Dashboard.find();

  return res.status(200).json({
    success: true,
    message: "App deleted Successfully",
    data: deletedApp,
    apps: updatedData,
  });
};

exports.modifyApps = async (req, res) => {};
