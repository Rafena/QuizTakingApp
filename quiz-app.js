const express = require('express');
const path = require('path');
const app = express();
/*
    default path consts to where the html , css and javascript root dirs are located
*/
const htmlPath = __dirname + '/public_html/';
const cssPath = __dirname + '/CSS';
const jsPath = __dirname + '/Scripts';


 /*
    This includes the css file into the path
 */
app.use('/Styles', express.static(cssPath));

 /*
    This includes the JS file into the path
 */
app.use('/Scripts', express.static(jsPath));

/*
    adding the Bootstrap Paths to the project
*/

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));


/*
    defines what the index file is
*/

app.get('/', function(request ,  response){
    response.sendFile(htmlPath + 'index.html')

});

app.get('/Profile', function(request ,  response){
    response.sendFile(htmlPath + 'profile.html' )

});

app.get('/submitAQuestion', function(request ,  response){
    response.sendFile(htmlPath + 'question.html')

});

app.listen(3000 , function(){
    console.log('Started at 3000');
});