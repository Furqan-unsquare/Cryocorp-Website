const express = require('express');
const Email = require('../models/Email');
const router = express.Router()

// 🔹 Create Email
router.post("/emails", async (req, res) => {
  try {
    const email = new Email({ email: req.body.email });
    console.log(email);
    await email.save();
    res.status(201).json(email);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Get All Emails
router.get("/emails", async (req, res) => {
  try {
    const emails = await Email.find();
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Get Email by ID
router.get("/emails/:id", async (req, res) => {
  try {
    const email = await Email.findById(req.params.id);
    if (!email) return res.status(404).json({ error: "Email not found" });
    res.json(email);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔹 Update Email
router.put("/emails/:id", async (req, res) => {
  try {
    const email = await Email.findByIdAndUpdate(
      req.params.id,
      { email: req.body.email },
      { new: true, runValidators: true }
    );
    if (!email) return res.status(404).json({ error: "Email not found" });
    res.json(email);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 🔹 Delete Email
router.delete("/emails/:id", async (req, res) => {
  try {
    const result = await Email.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ error: "Email not found" });
    res.json({ message: "Email deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;