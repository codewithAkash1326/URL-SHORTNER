const express = require("express");
const {
  generateNewShortURL,
  getAnalytics,
} = require("../controllers/url_controller");
const router = express.Router();

router.post("/", generateNewShortURL);

router.get("/analytics/:shortId", getAnalytics);

module.exports = router;
