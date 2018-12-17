// 15. insert new department with given department name and college id  ->   call insertDepartment('Computer Science', 1);
const connection = require('../config.js');

exports.insertDepartment = function(req,res){
	for(var i = 0; i < req.body.length;i++){
		let dept = req.body[i].dept;
		let collegeID = req.body[i].collegeID;

		connection.query('CALL insertDepartment(?,?)',[dept,collegeID],function(err,results,fields){
			if(err){
				if(err.code == 1062)throw err;
				else{ 
					console.log('bad')
					res.status(400).send(err);}
			} 
			else{
				console.log('good');
				res.send(200);
			}
		});
	}

}


