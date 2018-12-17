const mysql = require('mysql');

const config = {
    host     : "35.245.240.53",
    user     : "WebTech",
    password : "gTr2iB8AjnAJ",
    database : "quiz_schema"
};

const connection = mysql.createConnection(config)

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...')
});

module.exports = connection;