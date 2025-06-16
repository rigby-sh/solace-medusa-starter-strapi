export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Добавляем публичный URL сервера Strapi
  // Он будет использоваться для генерации абсолютных URL для медиафайлов
  url: env('PUBLIC_URL', 'https://strapi.bertazzoni.phlora.ru'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    // Настройки для populateRelations (могут понадобиться для вебхуков)
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
