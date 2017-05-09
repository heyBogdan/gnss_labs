/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Express', title2: 'Bogdan' });
};
exports.gnssSignals = function(req, res){
  res.render('gnss-signals',{ title: 'Express', title2: 'Bogdan' });
};
exports.glonass = function(req, res){
  res.render('glonass', { title: 'Express', title2: 'Bogdan' });
};
exports.navData = function(req, res){
  res.render('nav-data', { title: 'Express', title2: 'Bogdan' });
};
exports.hamming = function(req, res){
  res.render('hamming', { title: 'Express', title2: 'Bogdan' });
};