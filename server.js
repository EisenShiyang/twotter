const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true })); // Force users to use the secure version of website
app.use(serveStatic(__dirname + '/dist')); // Serving our production compiled files
app.use(history()); // This will stop a bunch of router history issues

app.listen(process.env.PORT || 5000); // env variable is from Heroku