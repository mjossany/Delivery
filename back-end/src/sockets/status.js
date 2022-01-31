const { Sale } = require('../database/models');

module.exports = (io, socket) => {
  socket.on('statusUpdate', async ({ id, status }) => {
    await Sale.update({
      where: { id },
    },
    { status });
    socket.emit('statusUpdated', status);
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
};