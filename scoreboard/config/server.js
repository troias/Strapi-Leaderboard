module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "http://c056-101-98-153-53.ngrok.io",
  cron: {
    enabled: env.bool('CRON_ENABLED', true),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e4f987c0f76bb135af6a5d7a3a78f6e8'),
    },
  },
});
