const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require('body-parser');
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
	also j Query and font awesome
*/

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/font', express.static(__dirname + '\node_modules\@fortawesome\fontawesome-free\css'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
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
app.get('/navbar.html', function(request ,  response){
    response.sendFile(htmlPath + 'navbar.html')

});

/*
    routes
*/
const insertUser = require('./routes/spInsertUser');
const authenticate = require('./routes/authUser');
const insertQuestion = require('./routes/spInsertQuestion');
const insertCollege = require('./routes/spInsertCollege');
const insertDept = require('./routes/spInsertDept');
const insertClass = require('./routes/spInsertClass');

app.post('/signup', insertUser.insertUser);
app.post('/authenticate', authenticate.authenticate);
app.post('/addquestion', insertQuestion.insertQuestion);
app.post('/addCollege', insertCollege.insertCollege);
app.post('/addDept', insertDept.insertDepartment);
app.post('/addclass',insertClass.addClass);


app.listen(3001 , function(){
    console.log('Started at 3000');
});