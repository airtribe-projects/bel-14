const net = require('net');

const clients = new Set();

const {ClientDuplexStream} =  require("./stream");

const server = net.createServer((socket) => {
  const clientStream = new ClientDuplexStream(socket);
  clients.add(clientStream);

  console.log('Client connected');
  clientStream.write('Welcome to the chat server!\n');

  clientStream.on('data', (chunk) => {
    const message = `Client: ${chunk.toString()}`;
    console.log(message);

    // Broadcast the message to all clients
    for (const client of clients) {
      if (client !== clientStream) {
        client.write(message);
      }
    }

    
  });

  clientStream.on('end', () => {
    console.log('Client disconnected');
    clients.delete(clientStream);
  });

  clientStream.on('error', (err) => {
    console.error('Client stream error:', err);
    clients.delete(clientStream);
  });
});

server.listen(8080, () => {
  console.log('Chat server listening on port 8080');
});
