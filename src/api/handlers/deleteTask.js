import mongodb from 'mongodb';
var ObjectID = mongodb.ObjectId;

let deleteTask = (collection, req, res)=>{
	var taskId = req.query.id;

	collection.deleteOne({
		_id: ObjectID(taskId)
	}, function(err, result){
		res.end();
	});
	
};

export default deleteTask;