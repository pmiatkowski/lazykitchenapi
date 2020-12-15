import { Router } from 'express';
import { RecipesController } from '@controllers/recipes';

export const router = Router();

const ctrl = new RecipesController();

router.route('/').get(ctrl.hello);

router.route('/123').get((req, res) => res.send(global.__basedir));
