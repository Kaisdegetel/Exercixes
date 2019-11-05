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



router.post('/formulaire',function(req,res){

  // console.log("post formulaire")
  var text = req.body.text

  text = noHTML(text)
  text = trunk32(text);  
 
  // console.log(text);
  res.render('result',{text: text});
 
   
});

trunk32 = function(string){
  return string.substr(0,32)
}

noHTML = function(string){

 return striptags(string);;

}


module.exports = router;
