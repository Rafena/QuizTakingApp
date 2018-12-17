const connection = require('../config.js');

exports.insertUser = function(req,res){
	let userName = req.body.userName;
	let password = req.body.password;
	
	connection.query('CALL insertUser (?,?)', [userName,password],function(err,results,fields){
		if(err){
			if(err.code == 1062)throw err;
			else{ 
				console.log('bad')
				res.status(400).send(err);}
		} 
		else{
			console.log('good')
			res.send(200);
		}
	})
}