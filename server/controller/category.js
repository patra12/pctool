var pool = require('../db')

module.exports ={
	addCategory: (req,res)=>{
		pool.getConnection(err,con)=>{
			if(!err){
				
			}
			else{
				console.log(err);
			}
		}	
	}
}