const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.sendFile("./views/welcome.html"));

module.exports = router;