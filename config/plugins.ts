export default ({ env }) => ({
  upload: {
    config: {
      provider: "local", // Используем локальное хранилище
      // providerOptions для aws-s3 больше не нужны:
      // providerOptions: {
      //   rootPath: env("DO_SPACE_PATH"),
      //   credentials: {
      //     accessKeyId: env("DO_SPACE_ACCESS_KEY"),
      //     secretAccessKey: env("DO_SPACE_SECRET_KEY"),
      //   },
      //   region: env("DO_SPACE_REGION"),
      //   endpoint: env("DO_SPACE_ENDPOINT"),
      //   params: {
      //     Bucket: env("DO_SPACE_BUCKET"),
      //   },
      // },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
