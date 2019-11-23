const {Pool} = require('pg');
const process = require('process');

let pool;

const connectionConfig = {
    host: 'db',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: 'postgres',
    port: 5432,
    poolSize: 10
};

if (!pool) {
    pool = new Pool(connectionConfig);
}

async function getFromPool() {
    return await pool.connect();
}

module.exports = {
    getFromPool
};