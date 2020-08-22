const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DBURI,
});

pool.on("connect", () => {
  console.log("connected to the db");
});

const createShopsTable = () => {
  const shopsCreateQuery = `CREATE TABLE IF NOT EXISTS shops
  (id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(16) NOT NULL,
    location VARCHAR(20) NOT NULL,
    price_range INT NOT NULL)`;

  pool
    .query(shopsCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createReviewsTable = () => {
  const reviewsCreateQuery = `CREATE TABLE IF NOT EXISTS reviews
  (id BIGSERIAL NOT NULL PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    shop_id BIGINT NOT NULL REFERENCES shops(id),
    name VARCHAR(16) NOT NULL,
    review TEXT NOT NULL,
    rating INT NOT NULL)`;

  pool
    .query(reviewsCreateQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

// only to be run at setup time
// createShopsTable();
// createReviewsTable();

const dropShopsTable = () => {
  const shopsDropQuery = "DROP TABLE IF EXISTS shops";
  pool
    .query(usersDropQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropReviewsTable = () => {
  const reviewsDropQuery = "DROP TABLE IF EXISTS reviews";
  pool
    .query(reviewsDropQuery)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const dropAllTables = () => {
  dropShopsTable();
  dropReviewsTable();
};

module.exports = {
  query: (text, params) => pool.query(text, params),
};
