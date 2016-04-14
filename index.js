var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log(res);
    response = {
        "response_type": "in_channel",
        // "text": "Ya herd",
        "attachments": [
            {
                "fallback": "HERD!",

                "color": "#36a64f",

                // "pretext": "Optional text that appears above the attachment block",

                // "author_name": "Bobby Tables",
                // "author_link": "http://flickr.com/bobby/",
                // "author_icon": "http://flickr.com/icons/bobby.jpg",

                "title": "Ya herd!",
                "title_link": "https://media.giphy.com/media/r75ImMRYtSpYQ/giphy.gif",

                // "text": "Optional text that appears within the attachment",

                // "fields": [
                //     {
                //         "title": "Priority",
                //         "value": "High",
                //         "short": false
                //     }
                // ],


                "image_url": "https://media.giphy.com/media/r75ImMRYtSpYQ/giphy.gif",
                // "thumb_url": "http://example.com/path/to/thumb.png"
            }
        ]
    };

    console.log(response);
    res.send(response);
});

app.listen(3355, function () {
    console.log('Listenin\' @3355');
});
