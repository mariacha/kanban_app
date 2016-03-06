/**
 * Created by mfisher on 3/6/16.
 *
 * index.js file for creating the app div.
 */
require('./main.css');
var component = require('./component');
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());