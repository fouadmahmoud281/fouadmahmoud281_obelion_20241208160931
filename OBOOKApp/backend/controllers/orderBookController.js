const OrderBook = require('../models/OrderBook');

// Function to handle creating a new order book entry
async function createOrderBook(req, res) {
  try {
    const { field1, field2, field3 } = req.body;
    const newOrderBook = await OrderBook.create({ field1, field2, field3 });
    return res.status(201).json(newOrderBook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Function to get all order book entries
async function getOrderBooks(req, res) {
  try {
    const orderBooks = await OrderBook.findAll();
    return res.status(200).json(orderBooks);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Function to get a single order book entry by ID
async function getOrderBookById(req, res) {
  try {
    const { id } = req.params;
    const orderBook = await OrderBook.findByPk(id);
    if (!orderBook) {
      return res.status(404).json({ error: 'OrderBook not found' });
    }
    return res.status(200).json(orderBook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Function to update an existing order book entry by ID
async function updateOrderBook(req, res) {
  try {
    const { id } = req.params;
    const { field1, field2, field3 } = req.body;
    const [updated] = await OrderBook.update({ field1, field2, field3 }, {
      where: { id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'OrderBook not found' });
    }
    const updatedOrderBook = await OrderBook.findByPk(id);
    return res.status(200).json(updatedOrderBook);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// Function to delete an order book entry by ID
async function deleteOrderBook(req, res) {
  try {
    const { id } = req.params;
    const deleted = await OrderBook.destroy({
      where: { id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'OrderBook not found' });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createOrderBook,
  getOrderBooks,
  getOrderBookById,
  updateOrderBook,
  deleteOrderBook
};
