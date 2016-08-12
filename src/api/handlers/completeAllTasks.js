let completeAllTasks = (collection, req, res)=>{
	collection.updateMany({
		completed: false
	}, {
		$set: {
			completed: true,
			completedDate: new Date()	
		}		
	}, function(){
		res.end();
	});
	
};

export default completeAllTasks;