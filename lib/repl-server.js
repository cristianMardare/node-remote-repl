const net = require('net');
const repl = require('repl');

const server = net.createServer((socket) => {
    console.log('Client connected...');
    socket.on('end', () => console.log('Client disconnected...'));

    const r = repl.start({
        prompt: 'Node.js via TCP socket> ',
        input: socket,
        output: socket
    });
    r.on('exit', () => {
        socket.end();
    });
    r.context.socket = socket;
})

server.listen(62226, () => {
    console.log('Server listening on port 62226');
});