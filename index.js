var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Ya herd https://media.giphy.com/media/r75ImMRYtSpYQ/giphy.gif');
});

app.listen(3355, function () {
    console.log('Listenin\' @3355');
});
