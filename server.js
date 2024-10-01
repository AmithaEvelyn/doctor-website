

const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Socket.io configuration
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("callUser", {
      signal: data.signalData,
      from: data.from,
      name: data.name,
    });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });
});

// Create HTTP server
server.listen(5000, () => console.log("server is running on port 5000"));


const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT1 = process.env.PORT1 || 8080;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/appointments", {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Appointment schema
const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  confirmed: Boolean,
  response: String,
  appointmentTime: { type: Date, default: Date.now },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
const jwt = require('jsonwebtoken');

const port12 = 1337;

// app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (make sure to replace the connection string and database name)
// mongoose.connect('mongodb://localhost:27017/lalala', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// Create a mongoose schema for the user
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  mobileNumber: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Route for patient sign-up
app.post('/api/PatSign', async (req, res) => {
  try {
    const { firstName, lastName, dateOfBirth, gender, mobileNumber, email, password } = req.body;

    // Save user to the MongoDB
    const user = new User({
      firstName,
      lastName,
      dateOfBirth,
      gender,
      mobileNumber,
      email,
      password,
    });

    await user.save();
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    res.json({ status: 'ok', user, token });
    // res.json({ status: 'ok' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

// Route for patient sign-in
app.post('/api/PSignIn', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user in the MongoDB
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
    }

    // No need to hash the password since you requested not to
    if (password !== user.password) {
      return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
    }

    // Create a JWT token for authentication
    const token = jwt.sign({ userId: user._id }, 'your-secret-key');

    res.json({ status: 'ok', user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});

app.listen(port12, () => {
  console.log(`Server is running on http://localhost:${port12}`);
});
// Create a new appointment
app.post("/createAppointment", async (req, res) => {
  try {
    const { patientName, doctorName } = req.body;
    const newAppointment = new Appointment({
      patientName,
      doctorName,
      confirmed: false,
    });
    await newAppointment.save();

    res.status(201).json({ message: "Appointment request sent successfully" });

    // Notify the doctor about the new appointment (you can use a notification service here)
    console.log(
      `Notification sent to doctor: ${doctorName} - New appointment request`
    );
  } catch (error) {
    res.status(500).json({ message: "Error creating appointment", error });
  }
});


app.get("/unconfirmedAppointments", async (req, res) => {
  try {
    const unconfirmedAppointments = await Appointment.find({
      confirmed: false,
    });
    res.status(200).json(unconfirmedAppointments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching unconfirmed appointments", error });
  }
});



app.put('/confirmAppointment/:id', async (req, res) => {
  try {
    const { response } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { confirmed: true, response });

    // Notify the patient about the approved/rejected appointment
    console.log(`Notification sent to patient: ${appointment.patientName} - Appointment ${appointment.confirmed ? 'approved' : 'rejected'}`);

    // Send the doctor's approval status along with the appointment details
    res.status(200).json({ message: `Appointment ${appointment.confirmed ? 'approved' : 'rejected'} successfully`, appointment, isDoctorApproved: appointment.confirmed });

    // Notify the patient only if the appointment is approved
    if (appointment.confirmed) {
      io.emit('patientApproved', { patientName: appointment.patientName, message: `Your appointment has been approved by the doctor.` });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error confirming/rejecting appointment', error });
  }
});


app.put('/updateAppointment/:id', async (req, res) => {
  try {
    const { response, doctorVideoCallId } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(req.params.id, { confirmed: true, response, doctorVideoCallId });

    // Notify the patient about the approved/rejected appointment
    console.log(`Notification sent to patient: ${appointment.patientName} - Appointment ${appointment.confirmed ? 'approved' : 'rejected'}`);

    // Send the doctor's approval status along with the appointment details
    res.status(200).json({ message: `Appointment ${appointment.confirmed ? 'approved' : 'rejected'} successfully`, appointment, isDoctorApproved: appointment.confirmed });

    // Notify the patient only if the appointment is approved
    if (appointment.confirmed) {
      io.emit('patientApproved', { patientName: appointment.patientName, message: `Your appointment has been approved by the doctor.` });
    }

  } catch (error) {
    res.status(500).json({ message: 'Error confirming/rejecting appointment', error });
  }
});
// Add a new route to fetch patient notifications
app.get('/patientNotifications', async (req, res) => {
  try {
    const patientNotifications = await Appointment.find({ confirmed: true, response: { $ne: null } });
    res.status(200).json(patientNotifications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient notifications', error });
  }
});




app.listen(PORT1, () => {
  console.log(`Server is running on port ${PORT1}`);
});

// ... (your existing code)

const PORT7 = process.env.PORT7 || 3001;
app.listen(PORT7, () => {
  console.log(`Server is running on port ${PORT7}`);
});


const QRCode = require('qrcode');

const PORT3 = process.env.PORT3 || 5050;

mongoose.createConnection('mongodb://localhost:27017/prescriptionApp', {
  //  useNewUrlParser: true, useUnifiedTopology: true 
  });
const prescriptionSchema = new mongoose.Schema({
  doctorName: String,
  medicine: String,
  qrCode: String,
});

const Prescription = mongoose.model('Prescription', prescriptionSchema);

app.post('/prescribe', async (req, res) => {
  try {
    const { doctorName, medicine } = req.body;

    // Generate QR Code
    const qrCode = await QRCode.toDataURL(medicine);

    // Save Prescription to MongoDB
    const prescription = new Prescription({ doctorName, medicine, qrCode });
    await prescription.save();

    res.json({ success: true, message: 'Prescription saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});


app.get('/prescriptions', async (req, res) => {
  try {
    const prescriptions = await Prescription.find();
    res.json({ success: true, prescriptions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error.' });
  }
});

app.listen(PORT3, () => {
  console.log(`Server is running on http://localhost:${PORT3}`);
});

const paymentRoutes = require("./routes/payment");


app.use("/api/payment/", paymentRoutes);

const port4 = process.env.PORT4 || 4040;
app.listen(port4, () => console.log(`Listening on port ${port4}...`));






