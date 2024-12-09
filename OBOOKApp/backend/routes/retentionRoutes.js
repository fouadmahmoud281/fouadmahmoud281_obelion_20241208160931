const express = require('express');
const router = express.Router();
const { getRetentionPeriod, setRetentionPeriod } = require('../controllers/retentionController');

router.get('/retention', getRetentionPeriod);
router.post('/retention', setRetentionPeriod);

module.exports = router;
