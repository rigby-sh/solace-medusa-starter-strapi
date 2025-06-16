export default ({ env }) => {
  console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID'));
  console.log('AWS_ACCESS_SECRET_KEY:', env('AWS_ACCESS_SECRET_KEY') ? '***' : 'not set');
  return {
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          s3Options: {
            credentials: {
              accessKeyId: env("AWS_ACCESS_KEY_ID"),
              secretAccessKey: env("AWS_ACCESS_SECRET_KEY"),
            },
            region: env("AWS_REGION"),
            endpoint: env("AWS_ENDPOINT"),
            forcePathStyle: true,
            params: {
              Bucket: env("AWS_BUCKET"),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};
