const express = require("express");
const { generateNewShortURL } = require("../controllers/url_controller");
const router = express.Router();

router.post("/", generateNewShortURL);

module.exports = router;
