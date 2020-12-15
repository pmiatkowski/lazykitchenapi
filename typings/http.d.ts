declare module 'http' {
	import * as http from 'http';

	class IncomingMessageExtended extends http.IncomingMessage {
		id?: string;
	}
}
