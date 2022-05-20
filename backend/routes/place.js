const express = require("express");

const router = express.Router();

const placeController = require("../controllers/place");

// GET /places/:district
router.get("/places/:district", placeController.getPlaces);

module.exports = router;
