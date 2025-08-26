const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/curabridge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  confirmPassword: String
})
const User = mongoose.model('User', userSchema)

// Patient schema (example)
const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  diagnosis: String,
  // Add more fields as needed
})
const Patient = mongoose.model('Patient', patientSchema)

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://praga007thija:GGjYz24OlNuOIgno@praga-007.ei9veqm.mongodb.net/myApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected"))
.catch((err) => console.error(err));


app.listen(5173, () => {
  console.log('Server running on http://localhost:5173')
})