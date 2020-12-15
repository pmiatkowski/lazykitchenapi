import 'module-alias/register';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressRequestId from 'express-request-id';

import config from './config';
import { v1 } from '@routes/v1';
import { requestLogger } from './libs';

global.__basedir = __dirname;

const app = express();

// Setup middlewares
app.use(expressRequestId());

app.use(
	cors({
		origin: true,
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

app.use(requestLogger);

// Setup routes
app.use('/api/v1', v1);

// Setup errors
app.use((req, res) => {
	return res.status(404).json({
		message: 'Not found',
	});
});

app.use((req, res, next) => {
	console.error(req);
	if (res.headersSent) {
		return next(req);
	}

	return res.status(500).json({
		message: 'Server error',
	});
});

// Start server
app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
