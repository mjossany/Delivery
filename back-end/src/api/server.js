const http = require('http').createServer(require('./app'));
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const { PORT = 3001 } = process.env;

require('./socket')(io);

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
