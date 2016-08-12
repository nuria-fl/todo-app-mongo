let completeTask = (collection, ObjectID, req, res)=>{
	var taskId = req.query.id;

	collection.updateOne({
		_id: ObjectID(taskId)
	}, {
		$set: {
			completed: true,
			completedDate: new Date()	
		}		
	})
	res.end();	
};

export default completeTask;