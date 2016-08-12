let counter = 0;

let newTask = (collection, req, res)=>{
	let task = {
		name: req.body.name,
		createdDate: new Date(),
		completed: false
	};

	collection.insert(task, function(){
		res.redirect('/');	
	});
	
};

export default newTask;