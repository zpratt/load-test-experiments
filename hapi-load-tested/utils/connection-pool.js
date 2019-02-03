const {Pool} = require('pg');

let pool;

const connectionConfig = {
    host: 'db',
    user: 'password',
    password: 'password',
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