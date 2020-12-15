import morgan from 'morgan';
import { IncomingMessageExtended } from 'http';
import { logger } from '../logger';

const format = ':requestId :method :url :status :response-time ms';

/**
 * Get `id` prop from request and assign it to the `requestId` key
 */
morgan.token<IncomingMessageExtended>('requestId', (req) => req.id);

export const requestLogger = morgan(format, {
	stream: {
		write: (message) => logger.info(message),
	},
});
