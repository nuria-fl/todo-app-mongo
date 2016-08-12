let listCompletedTasks = (collection, req, res)=>{

	// var doneTasks = tasks.filter( elem => elem.completed === true );
	// 

	collection.find({completed: true}).toArray(function(err, data){
		data.sort( (a,b) => new Date(b.completedDate) - new Date(a.completedDate) );
		res.render('completed', {
			title: 'Todo',
			tasks: data,
			currentUrl: req.url
		});
	})
	
};

export default listCompletedTasks;