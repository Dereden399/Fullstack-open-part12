const redis = require("redis")
const express = require('express');
const router = express.Router();

const configs = require('../util/config');
const { getAsync } = require("../redis");

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

router.get("/statistics", async (req, res) => {
  const todoCounter = await getAsync("added_todos") || 0
  res.status(200).json({added_todos: todoCounter})
})

module.exports = router;
