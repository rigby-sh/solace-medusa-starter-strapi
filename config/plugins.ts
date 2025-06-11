export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3", // Изменяем провайдера на aws-s3
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET_KEY"),
          region: env("AWS_REGION"),
          endpoint: env("AWS_ENDPOINT"), // Обязательно для Timeweb Cloud
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
});
