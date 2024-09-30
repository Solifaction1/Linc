const path = require('path');

const connection = process.env.NODE_ENV !== 'production' ?
  {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', '.tmp/data.db'),
    },
    useNullAsDefault: true,
  } : {
    client: "postgres",
    acquireConnectionTimeout: 120000,
    connection: {
      // host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`, // for a PostgreSQL database
      host: process.env.DATABASE_HOST, // for a PostgreSQL database
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      ssl: false,

    },
    useNullAsDefault: true,
    debug: false,
  };

module.exports = ({ }) => ({
  connection: connection,
});
