var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(res);
    response = {
        "response_type": "in_channel",
        "text": "Ya herd",
        "attachments": [
            {
                "image_url": "https://media.giphy.com/media/r75ImMRYtSpYQ/giphy.gif"
            }
        ]
    };
    res.send(response);
});

app.listen(3355, function () {
    console.log('Listenin\' @3355');
});
