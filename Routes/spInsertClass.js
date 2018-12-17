// 14. insert new class  with given class name and department id        ->   call insertClass('CS111', 1);
const connection = require('../config.js');

exports.addClass = function(req,res){
		let classes =req.body
	for(var i = 0; i < req.body.length;i++){
		let className = classes[i].class;
		let deptID = classes[i].deptID;

		console.log("adding class: "+className +" to department:" + deptID);
		connection.query('CALL insertClass(?,?)',[className,deptID],function(err,results,fields){
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