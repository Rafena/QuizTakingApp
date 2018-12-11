const express = require('express');
const router = express.Router();

router.post('arrayOfSomeSort', function(req,res){
	/*
		Loop through the array and get the correct attributes for all elements
	*/
	for(var key in req.body){
		//do something here
	}
	/*
		then send back the attributes in an array
	*/
	var returnArray;
	res.send(returnArray);
})

module.exports = router;