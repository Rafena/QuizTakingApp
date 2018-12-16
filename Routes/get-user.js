const express = require('express');
const router = express.Router();

router.get('user/:userID', function(req,res){
	res.send(req.params);
})

module.exports = router;