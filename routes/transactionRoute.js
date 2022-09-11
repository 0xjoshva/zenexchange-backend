const express = require("express");
const router = express.Router();
const con = require("../database/dbConnection");

// get all transactions
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM transactions", (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});


// show transactions for specific user id
router.get("/:id", (req, res) => {
  try {
    con.query(
      `SELECT * FROM transactions WHERE user_id = ${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});



module.exports = router;