var express = require('express');
var app = express();

app.set('view engine','ejs');
app.get('/',function(req,res){
res.render('new');
console.log('done');
});
app.listen(process.env.PORT || 3000);
