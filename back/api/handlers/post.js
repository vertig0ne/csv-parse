const csv = require('csv-parse');
const Table = require('../models/Table');

module.exports = (req, res, next) => {
  try {    
    const parser = csv({
      delimiter: ','
    }, (err, records) => {
      if (err) next(err);
      records.forEach((record) => {
        const [id, firstName, lastName, email, phone, address1, address2, county, postcode, sales] = record;
        if (id === 'id') return;
        Table.create({ id, firstName, lastName, email, phone, address1, address2, county, postcode, sales});
      })

      const results = Table.findAll();
      res.json(results);
    })
    parser.write(req.files[0].buffer);
    parser.end();
  } catch (err) {
    next(err);
  }
};
