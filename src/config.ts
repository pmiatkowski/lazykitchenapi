/**
 * Config based on `.env-cmdrc` file
 */
const config: Config = {
	prod: Boolean(process.env.PROD),
	port: process.env?.PORT || '6000',
};

export default config;
