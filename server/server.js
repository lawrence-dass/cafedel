require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

// express instance 
const app = express();


// middlewares
app.use(morgan("dev"));
app.use(express.json())

// get all restautants
app.get('/restaurants', (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      restaurants: [" barista", "cafe coffee day"]
    }
  })
})

// get a single restaurant
app.get('/restaurants/:id', (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      "restaurant": "dummy single"
    }
  })
})

// create a restaurant
app.post('/restaurants', (req, res) => {
  res.status(201).json({
    status: "success",
    data: {
      "restaurant": "dummy created"
    }
  })
})

// update restaurant
app.put('/restaurants/:id', (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      "restaurant": "dummy updated"
    }
  })
})

// delete restaurant
app.delete('/restaurants/:id', (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      "restaurant": "dummy deleted"
    }
  })
})


const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})