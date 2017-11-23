const express = require('express');

var server = express();


server.use('/', (req, res) => {
    res.send('OK');
    res.end();
});

server.listen(8080);