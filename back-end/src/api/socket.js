const updateStatus = require('../database/services/sales/updateStatus');

const saleStatus = {
  PREPARING: 'Preparando',
  TRANSIT: 'Em Trânsito',
  DELIVERED: 'Entregue',
};

const socketServer = (io) => {
  io.on('connection', (socket) => {
    console.log(`User connected on PORT ${socket.id}`);

    socket.on('preparando', async (saleId) => {
      await updateStatus(saleId, saleStatus.PREPARING);

      io.emit('updateSale', { saleId, status: saleStatus.PREPARING });
    });

    socket.on('transito', async (saleId) => {
      await updateStatus(saleId, saleStatus.TRANSIT);

      io.emit('updateSale', { saleId, status: saleStatus.TRANSIT });
    });

    socket.on('entregue', async (saleId) => {
      await updateStatus(saleId, saleStatus.DELIVERED);

      io.emit('updateSale', { saleId, status: saleStatus.DELIVERED });
    });
  });
};

module.exports = socketServer;