export default ({ env }) => ({
	upload: {
		config: {
			provider: '@avorati/strapi-provider-upload-minio',
			providerOptions: {
				host: process.env.MINIO_HOST || process.env.MINIO_ENDPOINT || 'localhost',
				port: process.env.MINIO_PORT ? parseInt(process.env.MINIO_PORT) : undefined,
				// If port is not specified, the provider will automatically use the default port based on useSSL (443 for HTTPS, 9000 for HTTP)
				useSSL: process.env.MINIO_USE_SSL === 'true',
				rejectUnauthorized: process.env.MINIO_REJECT_UNAUTHORIZED !== 'false', // default: true (secure)
				accessKey: process.env.MINIO_ACCESS_KEY,
				secretKey: process.env.MINIO_SECRET_KEY,
				bucket: process.env.MINIO_BUCKET || 'strapi-uploads',
				folder: process.env.MINIO_FOLDER || '', // optional
			},
		},
	},
});
