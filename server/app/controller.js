const Waitlist = require('./model');

// @desc    Join the waitlist
// @route   POST /api/join
const joinWaitlist = async (req, res) => {
  const { email, role } = req.body;

  try {
    // 1. Check if user already exists
    const userExists = await Waitlist.findOne({ email });

    if (userExists) {
      return res.status(409).json({ 
        success: false, 
        message: 'You are already on the list!' 
      });
    }

    // 2. Create new entry
    const newEntry = await Waitlist.create({
      email,
      role: role || 'customer', // Default to customer if not provided
      count: 0 // Initialize count
    });

    res.status(201).json({
      success: true,
      message: 'Welcome to the Civveo waitlist!',
      data: newEntry
    });

  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
};

// @desc    Get total count (optional, for "Join X others")
// @route   GET /api/count
const getCount = async (req, res) => {
  try {
    const count = await Waitlist.countDocuments();
    res.status(200).json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { joinWaitlist, getCount };