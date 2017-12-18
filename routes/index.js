const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.count >= 1) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }

  req.session.favoriteDog = 'German Shepard';
  console.log(req.session.count);
  res.render('index', {title: 'Express'});
});

module.exports = {
  router
};
