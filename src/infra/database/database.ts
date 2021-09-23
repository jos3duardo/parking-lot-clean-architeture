import pgPromise from "pg-promise";

const pgp = pgPromise({})

const db = pgp({
    user: 'postgres',
    password: "docker",
    host: '192.168.0.181',
    port: 5432,
    database: "parking",
    idleTimeoutMillis: 100
})

export default db;