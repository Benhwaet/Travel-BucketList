const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
  const filePath = path.join(__dirname, '../frontend/public/landing.html');
  res.sendFile(filePath);
});

module.exports = router;