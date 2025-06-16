export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          // Оборачиваем ключи в объект credentials
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET_KEY"),
          },
          region: env("AWS_REGION"),
          endpoint: env("AWS_ENDPOINT"), // Обязательно для S3-совместимых хранилищ
          // Для многих S3-совместимых хранилищ также может понадобиться этот параметр:
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
});
