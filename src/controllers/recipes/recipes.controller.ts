import { Request, Response } from 'express';

export class RecipesController<T extends Request, U extends Response> {
	public async hello(req: T, res: U) {
		res.send('recipies hello');
	}
}
