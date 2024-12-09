const express = require('express');
const router = express.Router();
const { validateFile, getFile, updateFile, deleteFile } = require('../controllers/fileValidationController');

router.post('/validate', validateFile);
router.get('/:id', getFile);
router.put('/:id', updateFile);
router.delete('/:id', deleteFile);

module.exports = router;
