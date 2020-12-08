import { Request, Response } from 'express';

export class APIV1Controller<T extends Request, U extends Response> {
	public hello(req: T, res: U) {
		res.send('V1 works');
	}
}
