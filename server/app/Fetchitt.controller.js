const FetchittUser = require ('./Fetchitt.model');

// @desc    Register a new user (Sender or Fetcher)
// @route   POST /api/fetchitt/register
const registerUser = async (req, res) => {
  // Destructure all fields from the frontend form
  const { fullName, email, password, role } = req.body;

  try {
    // 1. Check if user already exists
    const userExists = await FetchittUser.findOne({ email });

    if (userExists) {
      return res.status(409).json({ 
        success: false, 
        message: 'This email is already registered with Fetchitt.' 
      });
    }

    // 2. Create new user
    // Note: For production, you should hash the password here using bcrypt
    const newUser = await FetchittUser.create({
      fullName,
      email,
      password, // Storing as plain text for now (secure this later!)
      role: role || 'sender' // Defaults to sender if not selected
    });

    res.status(201).json({
      success: true,
      message: `Welcome to Fetchitt, ${newUser.fullName}!`,
      data: {
        _id: newUser._id,
        email: newUser.email,
        role: newUser.role
      }
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Get total Fetchitt users (Optional: for "Join X neighbors")
// @route   GET /api/fetchitt/count
const getUserCount = async (req, res) => {
  try {
    const count = await FetchittUser.countDocuments();
    res.status(200).json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { registerUser, getUserCount };