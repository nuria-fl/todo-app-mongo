let deleteTask = (collection, ObjectID, req, res)=>{
	var taskId = req.query.id;
	// var itemToDelete = null;
	// tasks.forEach((elem, i) => {
	// 	if(elem.id === taskId){
	// 		itemToDelete = i;
	// 	}
	// });
	// tasks.splice(itemToDelete, 1);

	collection.deleteOne({
		_id: ObjectID(taskId)
	})

	res.end();
};

export default deleteTask;