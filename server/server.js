require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

// express instance
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// get all restautants
app.get("/shops", async (req, res) => {
  try {
    const shopRatingData = await db.query(
      "SELECT * FROM shops LEFT JOIN (select shop_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating from reviews GROUP BY shop_id) reviews on shops.id = reviews.shop_id;"
    );
    res.status(200).json({
      status: "success",
      results: shopRatingData.rows.length,
      data: {
        shops: shopRatingData.rows,
      },
    });
  } catch (err) {
    console.log({ err });
  }
});

// get a single shop
app.get("/shops/:id", async (req, res) => {
  try {
    // parameterized query // avoid string interpolation
    const shops = await db.query(
      "SELECT * FROM shops LEFT JOIN (select shop_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating from reviews GROUP BY shop_id) reviews on shops.id = reviews.shop_id WHERE id = $1",
      [req.params.id]
    );
    const reviews = await db.query("SELECT * FROM reviews WHERE shop_id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        shop: shops.rows[0],
        reviews: reviews.rows,
      },
    });
  } catch (err) {
    console.log({ err });
  }
});

// create a shop
app.post("/shops", async (req, res) => {
  try {
    const results = await db.query(
      "INSERT INTO shops (name, location, price_range ) VALUES ($1, $2, $3) returning *",
      [req.body.name, req.body.location, req.body.price_range]
    );
    res.status(201).json({
      status: "success",
      data: {
        shop: results.rows[0],
      },
    });
  } catch (err) {
    console.log({ err });
    res.status(400).json({
      status: "error",
      message: "bad request",
    });
  }
});

// update shop
app.put("/shops/:id", async (req, res) => {
  try {
    const results = await db.query(
      "UPDATE shops SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *",
      [req.body.name, req.body.location, req.body.price_range, req.params.id]
    );
    res.status(200).json({
      status: "success",
      data: {
        shop: results.rows[0],
      },
    });
  } catch (err) {
    console.log({ err });
  }
});

// delete shop
app.delete("/shops/:id", async (req, res) => {
  try {
    const reviewresults = await db.query(
      "DELETE FROM reviews WHERE shop_id = $1",
      [req.params.id]
    );
    const shopResults = await db.query("DELETE FROM shops WHERE id = $1", [
      req.params.id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        shop: "dummy deleted",
      },
    });
  } catch (err) {
    console.log({ err });
  }
});

// add review

app.post("/shops/:id/addReview", async (req, res) => {
  try {
    const newReview = await db.query(
      "INSERT INTO reviews (shop_id, name, review, rating) VALUES ($1, $2, $3, $4 ) returning *",
      [req.params.id, req.body.name, req.body.review, req.body.rating]
    );
    console.log(newReview.rows[0]);

    res.status(201).json({
      status: "success",
      data: {
        review: newReview.rows[0],
      },
    });
  } catch (err) {
    console.log({ err });
  }
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
