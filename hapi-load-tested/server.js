const Hapi = require('hapi');
const addRoute = require('./routes/hello');
const pizzaRepository = require('./repositories/pizza');

async function start() {
    const server = new Hapi.Server({
        port: 8080,
        host: '0.0.0.0',
        debug: {request: ['error']}
    });

    await server.initialize();

    server.route(addRoute);

    server.route({
        method: 'GET',
        path: '/pizzas',
        handler: async () => {
            return pizzaRepository.findByDescription()
        }
    });

    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
}

module.exports = start;
