const express = require("express");

const router = express.Router();

const priceController = require("../controllers/price");

// GET /price/:type
router.get("/price/:type", priceController.getPrice);

module.exports = router;