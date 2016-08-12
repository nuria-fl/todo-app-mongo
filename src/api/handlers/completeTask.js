import mongodb from 'mongodb';
var ObjectID = mongodb.ObjectId;

let completeTask = (collection, req, res)=>{
	var taskId = req.query.id;

	collection.updateOne({
		_id: ObjectID(taskId)
	}, {
		$set: {
			completed: true,
			completedDate: new Date()	
		}		
	}, function(){
		res.end();		
	});
	
};

export default completeTask;