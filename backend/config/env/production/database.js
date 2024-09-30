module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            // host: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`, // for a PostgreSQL database
            host: process.env.DATABASE_HOST, // for a PostgreSQL database
            database: env('DATABASE_NAME'),
            user: env('DATABASE_USER'),
            password: env('DATABASE_PASSWORD'),
            ssl: false
        },
    },
});
