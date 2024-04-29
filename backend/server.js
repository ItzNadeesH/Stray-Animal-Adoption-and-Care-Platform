const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
//insert of route of donationrouter
const router = require('./Routes/DonationRouter');
const Maitanacerouter = require('./Routes/MaintananceRoute');
const doctorfeedbackRouter = require('./Routes/DoctorfeedbackRoutes');
const servicesRouter = require('./Routes/serviceFeedbackRoutes'); 
const cors = require('cors');

const app = express();

// Connect database
connectDB();

// Init Middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/profiles', require('./routes/profiles'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/reports', require('./routes/reports'));

//middleware
app.use(express.json());
app.use(cors());
app.use('/donations', router);
app.use('/requrements', Maitanacerouter);
app.use('/files', express.static('files'));

app.use("/api/Doctorfeedback", doctorfeedbackRouter);
app.use("/api/services", servicesRouter); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Regsiter
//call register model
require('./Models/RegisterModel');
const User = mongoose.model('Registration');
app.post('/register', async (req, res) => {
  const { name, gmail, password } = req.body;
  const user = new User({
    name,
    gmail,
    password,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({
      message: 'unable to add user',
    });
  }
  return res.status(200).json({
    message: 'user added successfully',
  });
});

//login
app.post('/login', async (req, res) => {
  const { gmail, password } = req.body;
  console.log('Login request:', req.body); // Debugging
  try {
    const user = await User.findOne({ gmail });
    console.log('Found user:', user); // Debugging
    if (!user) {
      return res.json({ err: 'User not found' });
    }
    if (user.password === password) {
      return res.json({ status: 'ok' });
    } else {
      return res.json({ err: 'Incorrect password' });
    }
  } catch (err) {
    console.error('Login error:', err); // Debugging
    res.status(500).json({ err: 'Server error' });
  }
});

//for donation manager
//DManagerRegsiter
//call register model
require('./Models/DManagerRegisterModel');
const DManager = mongoose.model('DManagerRegistration'); //for User
app.post('/DManagerregister', async (req, res) => {
  const { name, gmail, password } = req.body;
  const user = new DManager({
    name,
    gmail,
    password,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({
      message: 'unable to add user',
    });
  }
  return res.status(200).json({
    message: 'user added successfully',
  });
});

//DManagerlogin
//DManagerlogin
app.post('/Adminlogin', async (req, res) => {
  const { gmail, password } = req.body;
  console.log('Login request:', req.body); // Debugging
  try {
    const dManager = await DManager.findOne({ gmail });
    console.log('Found user:', dManager); // Debugging
    if (!dManager) {
      return res.json({ err: 'User not found' });
    }
    if (dManager.password === password) {
      return res.json({ status: 'ok' });
    } else {
      return res.json({ err: 'Incorrect password' });
    }
  } catch (err) {
    console.error('Login error:', err); // Debugging
    res.status(500).json({ err: 'Server error' });
  }
});

//pdf upload......
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './file');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

//insert model part
require('./Models/PdfModel');
const PdfSchema = mongoose.model('PdfDetails');
const upload = multer({ storage });
// pdf upload endpoint
app.post('/uploadfile', upload.single('file'), async (req, res) => {
  const title = req.body.title;
  const pdf = req.file.filename;

  try {
    await PdfSchema.create({ title: title, pdf: pdf });
    res.status(200).send({ status: 200 });
  } catch (err) {
    console.error(err);
    res.status(500).send({ status: 500 });
  }
});

//get file part
app.get('/getfile', async (req, res) => {
  try {
    const data = await PdfSchema.find({});
    res.send({ status: 200, data: data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: ' error' });
  }
});
