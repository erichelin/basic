import Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.route({
    method: 'GET',
    path:'/',
    handler: function (request: any, reply: any) {
        return reply('Welcome to the API');
    }
});

server.start((err: any) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
});