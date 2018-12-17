// insertQuestion(qDes text, classN varchar(45), 
// uName varchar(45), ans1 text,ans2 text, ans3 text, ans4 text)
const connection = require('../config.js');

exports.insertQuestion = function(req,res){
	let description = req.body.description;
	let className = req.body.className;
	let userName = req.body.userName;
	let ans1 = req.body.ans1
	let ans2 = req.body.ans2
	let ans3 = req.body.ans3
	let ans4 = req.body.ans4
	// System.out.println(req.body);
	connection.query('CALL insertQuestion(?,?,?,?,?,?,?)', 
					[description,className,userName,ans1,ans2,ans3,ans4],
					function(err,results,fields){
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
	})
}