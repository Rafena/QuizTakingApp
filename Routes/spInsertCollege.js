// 16. insert new college with given college name                       ->   call SP_insertCollege('City College');

const connection = require('../config.js');

exports.insertCollege = function(req,res){
	let college = req.body.college;

	connection.query('CALL SP_insertCollege(?)',college,function(err,results,fields){
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
	});

}