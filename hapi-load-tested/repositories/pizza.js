const pool = require('../utils/connection-pool');

function mapResultSet(results) {
    return results.rows.map((row) => {
        return {
            id: row.id,
            description: row.description
        };
    });
}

module.exports = {
    findByDescription: async () => {
        const client = await pool.getFromPool();

        try {
            const results = await client.query('select id, description from test.pizza');
            client.release();

            return mapResultSet(results);
        } catch(err) {
            console.error(`got an error: ${err}`);

            client.release();

            return err;
        }
    }
};