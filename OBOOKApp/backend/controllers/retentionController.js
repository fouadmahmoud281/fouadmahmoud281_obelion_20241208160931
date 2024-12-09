const Retention = require('../models/Retention');

// Handler to get the current retention period
const getRetentionPeriod = async (req, res) => {
  try {
    const retention = await Retention.findOne();
    if (!retention) {
      return res.status(404).json({ error: 'Retention period not found' });
    }
    res.json({ retentionPeriod: retention.retentionPeriod });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Handler to update the retention period
const setRetentionPeriod = async (req, res) => {
  try {
    const { retentionPeriod } = req.body;
    if (retentionPeriod < 1) {
      return res.status(400).json({ error: 'Retention period must be at least 1 day' });
    }

    const retention = await Retention.findOne();
    if (retention) {
      retention.retentionPeriod = retentionPeriod;
      await retention.save();
    } else {
      await Retention.create({ retentionPeriod });
    }

    res.json({ message: 'Retention period updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getRetentionPeriod,
  setRetentionPeriod,
};
