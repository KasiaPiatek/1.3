var express = require('express');
var app = express();
var fs = require('fs');
var stringifyFile = 'req.params.note';

app.use(bodyParser.json()); /* wykorzystuje middleware body-parser*/


app.get('/getNote', function(req, res) {
    fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
})
});

app.post('/updateNote/:note', function (req, res) {
    fs.writeFile('./test.json', stringifyFile, function(err) {
   if (err) throw err;
    console.log('file updated');
})
});


app.listen(3000);