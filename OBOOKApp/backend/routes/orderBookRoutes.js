const express = require('express');
const router = express.Router();
const {
  createOrderBook,
  getOrderBooks,
  getOrderBookById,
  updateOrderBook,
  deleteOrderBook
} = require('../controllers/orderBookController');

router.post('/orderbooks', createOrderBook);
router.get('/orderbooks', getOrderBooks);
router.get('/orderbooks/:id', getOrderBookById);
router.put('/orderbooks/:id', updateOrderBook);
router.delete('/orderbooks/:id', deleteOrderBook);

module.exports = router;
