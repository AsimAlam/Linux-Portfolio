// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect("mongodb://localhost:27017/osproject", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Define a simple User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // In production, hash your passwords!
    name: String,
    about: String,
    skills: String,
    resume: String, // base64 data URL for the PDF
});

const User = mongoose.model("User", userSchema);

// Endpoint for user registration
app.post("/api/register", async (req, res) => {
    try {
        const { email, password, name, about, skills, resume } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({ email, password, name, about, skills, resume });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Endpoint for login
app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Basic login; in production, compare hashed passwords!
        const user = await User.findOne({ email, password });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
