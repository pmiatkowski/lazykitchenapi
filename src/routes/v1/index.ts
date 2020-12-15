import { Router } from 'express';

import { recipesRouter } from './recipes';

const router = Router();

router.route('/').get((req, res) => {
	res.send('V1 works');
});

/**
 * Define additional routes
 */
router.use('/recipes', recipesRouter);

export const v1 = router;
