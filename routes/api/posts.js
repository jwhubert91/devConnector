const express = require('express');
const router = express.Router();

// Description of route:
// @route   GET api/users
// @desc    Test route
// @access  Public
router.get('/', (req,res) => res.send('Posts route'));

module.exports = router;