var express = require('express')
var app = express()
var path = require('path')
require('dotenv').config();

app.get('/estado', function(request, response) {
    response.json({ mensaje: "Hola  mundo" })
})


app.use('/', express.static(__dirname + '/'));

app.get('/*', function(req, res, next) {
    res.sendFile(path.resolve(__dirname + "/index.html"));
});



var puerto = process.env.port || 5000;

app.listen(puerto, () => console.log('servidor funcionando por el puerto ' + puerto))