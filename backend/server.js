const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/Items')

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/Login")

app.post('/login', (req, res) => {
  User.create(req.body)
  const {email, password} = req.body;
  User.findOne({email: email})
  .then(user => {
    if (user) {
        if(user.password === password) {
          res.json({ message: 'Login successful', user });
        } else {
          res.json({ message: 'Invalid credentials' });
        }
    } else {
       res.json({ message: 'User not found' });
    }

  })
})
app.post('/signup', (req, res) => {
  User.create(req.body)
  .then(Users => res.json(Users))
  .catch(err => res.json(err))
})

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000')
})