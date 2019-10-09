const express = require("express");

const router = express.Router();

router.get("/api/whoami", (req, res) => {
  const ipaddress = req.headers.host;
  const language = req.headers["accept-language"];
  const userAgent = req.headers["user-agent"];
  console.log(ipaddress);
  console.log(language);
  console.log(userAgent);
  res.json({ ipaddress: ipaddress, language: language, software: userAgent });
});

module.exports = router;
