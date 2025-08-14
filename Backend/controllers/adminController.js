const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Login Admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({
      message: 'Login successful',
      admin: { id: admin._id, name: admin.name, email: admin.email },
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create Admin
exports.createAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const admin = new Admin({ name, email, password });
    await admin.save();

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.status(201).json({
      message: 'Admin created successfully',
      admin: { id: admin._id, name, email },
      token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Admin Profile
exports.getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Admin Profile
exports.updateAdminProfile = async (req, res) => {
  try {
    const { name, email, oldPassword, newPassword } = req.body;
    const admin = await Admin.findById(req.admin._id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin account no longer exists' });
    }

    if (oldPassword && newPassword) {
      const isMatch = await admin.comparePassword(oldPassword);
      if (!isMatch) {
        return res.status(401).json({ message: 'Incorrect old password' });
      }
      admin.password = newPassword; // Will be hashed by pre-save hook
    }

    admin.name = name || admin.name;
    admin.email = email || admin.email;
    
    await admin.save();
    
    res.json({
      message: 'Profile updated successfully',
      admin: { id: admin._id, name: admin.name, email: admin.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.admin._id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin account no longer exists' });
    }
    res.json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find().select('-password');
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};