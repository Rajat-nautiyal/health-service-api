const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const serviceRoutes = require('./routes/route.js');

dotenv.config(); //it is not needed right now but for development purpose ,its needed

const app = express();
app.use(express.json());

// Connecting to MongoDB
mongoose
  .connect("mongodb://localhost:27017/healthcareDB")
  .then(() => console.log('connected to MongoDB'))
  .catch((err) => console.log(err));

app.use('/services', serviceRoutes);// all routes for get, put, post, delete in a single file

app.get('/',(req,res)=>{
    res.json({message:'api running bro'}) //just to check whether our web is working or not
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server at ${PORT} is running`);// Start server
});
