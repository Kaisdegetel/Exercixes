var express = require('express');

var striptags = require('striptags');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/formulaire', function(req, res, next) {
  res.render('formulaire');
})

router.post('/formulaire', trunk32, noHTML, function(req,res){

  res.render('result',{text: req.body.text});  
});

function trunk32(req, res, next) {

  req.body.text = req.body.text.substr(0,32)   
  next()

}

function noHTML(req,res,next){
  req.body.text = striptags(req.body.text);
  next()

}




module.exports = router;
