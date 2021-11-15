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
      defaultConnection: "default",
      connections: {
        default: {
          connector: "bookshelf",
          settings: {
            client: "sqlite",
            filename: ".tmp/data.db",
            //env("DATABASE_URL"),
            // host: env("DATABASE_HOST"),
            // port: env("DATABASE_PORT"),
            // username: env("DATABASE_USER"),
            // password: env("DATABASE_PASSWORD"),
            // database: env("DATABASE_NAME"),
            // ssl: env("DATABASE_SSL"),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    };
  }
}



