const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {
  if(env("NODE_ENV") === "production") {
    const config = parse(env("DATABASE_URL"))
    console.log("config", config)
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'postgres',
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
          },
          options: {
            ssl: false,
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
            filename: env("DATABASE_FILENAME", ".tmp/data.db"),
          },
          options: {
            useNullAsDefault: true,
          },
        },
      },
    };

  }
}



