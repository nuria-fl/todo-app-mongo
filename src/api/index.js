import { version } from '../../package.json';
import { Router } from 'express';
import listTasks from './handlers/listTasks';
import newTask from './handlers/newTask';
import completeTask from './handlers/completeTask';
import deleteTask from './handlers/deleteTask';
import completeAllTasks from './handlers/completeAllTasks';
import listCompletedTasks from './handlers/listCompletedTasks';

export default (db) => {
	let api = Router();

	var collection = db.collection('tasks');

	api.get( '/', listTasks.bind(null, collection) );
	api.post( '/', newTask.bind(null, collection) );
	api.put( '/', completeTask.bind(null, collection) );
	api.delete( '/', deleteTask.bind(null, collection) );
	api.put( '/alldone', completeAllTasks.bind(null, collection) );
	api.get( '/completed', listCompletedTasks.bind(null, collection) );

	return api;
};