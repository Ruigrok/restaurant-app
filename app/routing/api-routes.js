var tableData = require('../data/table-data.js');
var waitlistData = require('../data/waitlist-data.js');

module.exports = function(app) {
  
  app.get('/api/tables', function(req, res) {
    res.json(tableData);
  });

  app.get('/api/waitlist', function(req, res) {
    res.json(waitlistData);
  })
}





