let listTasks = (collection, req, res) => {
	collection.find({completed: false}).toArray(function(err, data){
		res.render('index', {
			title: 'Todo',
			tasks: data,
			currentUrl: req.url
		});	
	});
};

export default listTasks;