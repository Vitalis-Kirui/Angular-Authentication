const express = require('express');
const router = express.Router();

// Api routes home page
router.get('/', (req, res) => {
    res.send('This is from API routes')
});

module.exports = router;