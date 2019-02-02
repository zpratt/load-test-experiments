const Hapi = require('hapi');
const addRoute = require('./routes/add');

const server = new Hapi.Server({
    port: 8080,
    host: "0.0.0.0",
    debug: { request: ['error'] }
});

async function start() {
    server.route(addRoute);

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
}

module.exports = start;
