import { Express } from 'express';
import { APIV1Controller } from './v1.controller';

export const v1Routes = (app: Express) => {
	const ctrl = new APIV1Controller();

	app
		.route('/api/v1/')
		.get((req, res, next) => {
			console.log(`Request [${req.method}] from: "${req.originalUrl}"`);
			next();
		})
		.get(ctrl.hello);
};
