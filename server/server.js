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
    const restaurantRatingData = await db.query("SELECT * FROM restaurants LEFT JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating from reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
    );
    res.status(200).json({
      status: "success",
      results: restaurantRatingData.rows.length,
      data: {
        restaurants: restaurantRatingData.rows
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
    const restaurants = await db.query('SELECT * FROM restaurants LEFT JOIN (select restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating from reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1', [req.params.id]);
    const reviews = await db.query('SELECT * FROM reviews WHERE restaurant_id = $1', [req.params.id]);
    res.status(200).json({
      status: "success",
      data: {
        "restaurant": restaurants.rows[0],
        "reviews": reviews.rows
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

// add review

app.post('/restaurants/:id/addReview', async (req, res) => {
  try {
    const newReview = await db.query('INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4 ) returning *', [req.params.id, req.body.name, req.body.review, req.body.rating]);
    console.log({ newReview })
    res.status(201).json({
      status: 'success',
      data: {
        review: newReview.rows[0]
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