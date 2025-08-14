const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const blogRoutes = require('./routes/blog');
const emailRoutes = require('./routes/emailRoutes');

dotenv.config();

const app = express();

// Increase payload size limit to 5MB or more
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 15000, // Increase from default 10s
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

mongoose.connection.on('error', err => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});



// Subscriber Schema and Model
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// API to store email
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!email || !emailRegex.test(email)) {
  return res.status(400).json({ message: 'Invalid email address' });
}


  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }
    res.status(500).json({ message: 'Database error' });
  }
});

// API to fetch subscribers
app.get('/api/subscribers', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, 'email');
    res.status(200).json({ subscribers: subscribers.map(sub => sub.email) });
  } catch (error) {
    res.status(500).json({ message: 'Database error' });
  }
});

// Routes
app.use('/api/admin', adminRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/email', emailRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));