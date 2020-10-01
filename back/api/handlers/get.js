const Table = require('../models/Table');

module.exports = (req, res, next) => {
  try {
    const results = Table.findAll();
    res.json(results);
  } catch(err) {
    next(err);
  }
}