const userModel = require("../../Models/userModel.js");

exports.userWelcome = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to user routes",
  });
};

// user should be logged in using only password
exports.userLogin = (req, res) => {
  const { password } = req.body;

  res.status(201).json({
    success: true,
    message: "Ask about this route with sir ",
  });
};

exports.allUsers = async (req, res) => {

  try {
    let users = await userModel.find();
    users=users.map((user)=>{
      const {password ,...otherDetails}= user._doc
      return otherDetails
  })
    res.status(200).json({
      users
    })
  } catch (error) {
    res.status(500).json({ "error": error.message });
  }
}
