module.exports = ({ env }) => {
  if(env("NODE_ENV") === "development") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "sqlite",
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    };

  } else {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: env('DB_HOST', 'localhost'),
            port: env('DB_PORT', 27017 ),
            database: env('DB_NAME', 'strapi'),
            username: env('DB_USER', ""),
            password: env('DB_PASSWORD', ""),
            ssl: {
              rejectUnauthorized: false,
            },
          },
          options: {
            ssl: true,
          },
        },
      },
    };
  }
}



