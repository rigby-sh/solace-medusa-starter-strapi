export default ({ env }) => ({
	upload: {
		config: {
			provider: 'aws-s3',
			providerOptions: {
				s3Options: {
					credentials: {
						accessKeyId: env('MINIO_ACCESS_KEY_ID'),
						secretAccessKey: env('MINIO_ACCESS_SECRET'),
					},
					region: env('MINIO_REGION'),
					endpoint: env('MINIO_ENDPOINT'),
					forcePathStyle: true, // Required for these providers
					params: {
						Bucket: env('MINIO_BUCKET'),
					},
				},
			},
		},
	},
});
