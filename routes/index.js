/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express', title2: 'Bogdan' });
};
exports.gnssSignals = function(req, res){
  res.render('gnss-signals',{ title: 'Express', title2: 'Bogdan' });
};