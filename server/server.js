require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./db');



// express instance 
const app = express();


// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

// get all restautants
app.get('/restaurants', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM restaurants')
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows
      }
    })
  } catch (err) {
    console.log({ err });
  }

})

// get a single restaurant
app.get('/restaurants/:id', async (req, res) => {
  try {
    // parameterized query // avoid string interpolation
    const results = await db.query('SELECT * FROM restaurants WHERE id = $1', [req.params.id]);
    res.status(200).json({
      status: "success",
      data: {
        "restaurant": results.rows[0]
      }
    })
  } catch (err) {
    console.log({ err })
  }
})

// create a restaurant
app.post('/restaurants', async (req, res) => {
  try {
    const results = await db.query('INSERT INTO restaurants (name, location, price_range ) VALUES ($1, $2, $3) returning *', [req.body.name, req.body.location, req.body.price_range])
    res.status(201).json({
      status: "success",
      data: {
        "restaurant": results.rows[0]
      }
    })
  } catch (err) {
    console.log({ err });
  }

})

// update restaurant
app.put('/restaurants/:id', async (req, res) => {
  try {
    const results = await db.query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *', [req.body.name, req.body.location, req.body.price_range, req.params.id])
    res.status(200).json({
      status: "success",
      data: {
        "restaurant": results.rows[0]
      }
    })
  } catch (err) {
    console.log({ err });
  }
})

// delete restaurant
app.delete('/restaurants/:id', async (req, res) => {
  try {
    const results = await db.query('DELETE FROM restaurants WHERE id = $1', [req.params.id])
    res.status(200).json({
      status: "success",
      data: {
        "restaurant": "dummy deleted"
      }
    })
  } catch (err) {
    console.log({ err })
  }
})


const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})