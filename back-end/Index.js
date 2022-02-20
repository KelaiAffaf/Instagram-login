const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


require("dotenv").config();

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const URL = process.env.URL ;


// set up mongoose

mongoose.connect(
    'mongodb://localhost:27017/instagram',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established ");
  }
);

console.log(require('crypto').randomBytes(64).toString('hex'));
app.use('/users', require('./Routes/User.Route'));
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));