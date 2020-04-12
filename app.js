const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + '/dist'));
const port = process.env.PORT || 8000;
const hostname = 'localhost';


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

