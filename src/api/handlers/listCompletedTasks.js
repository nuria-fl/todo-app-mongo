let listCompletedTasks = (collection, req, res)=>{

	collection.find({completed: true}).toArray(function(err, data){
		data.sort( (a,b) => new Date(b.completedDate) - new Date(a.completedDate) );
		res.render('completed', {
			title: 'Todo',
			tasks: data,
			currentUrl: req.url
		});
	});
	
};

export default listCompletedTasks;