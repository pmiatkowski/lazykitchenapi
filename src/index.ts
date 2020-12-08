import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import config from './config';
import * as Routes from './routes';

const app = express();

// Setup middlewares
app.use(
	cors({
		origin: '*',
	})
);

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use(
	bodyParser.json({
		strict: true,
	})
);

// Setup routes
Routes.v1Routes(app);

// Start server
app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
