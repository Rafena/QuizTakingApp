const express = require('express');
const path = require('path');
const app = express();
 /*
    This includes the css file into the path
 */
app.use('Styles', express.static(__dirname + '/CSS'));

 /*
    This includes the JS file into the path
 */
app.use('Scripts', express.static(__dirname + '/Scripts'));

/*
    defines what the index file is
*/

app.get('/', function(request ,  response){
    response.sendFile(__dirname +'/public_html/index.html', )

});