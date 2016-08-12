let counter = 0;

let newTask = (collection, req, res)=>{
	let task = {
		name: req.body.name,
		createdDate: new Date(),
		completed: false
	};
	// tasks.push(task);

	collection.insert(task)
	
	res.redirect('/');
};

export default newTask;