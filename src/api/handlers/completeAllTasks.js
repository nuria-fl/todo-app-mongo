let completeAllTasks = (collection, req, res)=>{
	// tasks.forEach( elem => {
	// 	elem.completed = true;
	// 	elem.completedDate = new Date();
	// });
	collection.updateMany({
		completed: false
	}, {
		$set: {
			completed: true,
			completedDate: new Date()	
		}		
	})
	res.end();
};

export default completeAllTasks;