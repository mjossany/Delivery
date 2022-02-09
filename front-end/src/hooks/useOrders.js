import { useCallback, useState } from 'react';
import moment from 'moment';
import { io } from 'socket.io-client/dist/socket.io';
import api from '../services/api';

const socket = io('http://localhost:3001');

const useOrders = () => {
  const [customerOrders, setCustomerOrders] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [saleOrder, setSaleOrder] = useState(null);

  const getSaleById = useCallback(async (saleId) => {
    try {
      const { data } = await api.get(`/seller/orders/${saleId}`);
      setSaleOrder(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getOrderById = useCallback(async (orderId) => {
    try {
      const { data } = await api.get(`/customer/orders/${orderId}`);
      setOrder(data.orderDetails);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getAllCustomerOrders = useCallback(async () => {
    try {
      const { data } = await api.get('/customer/orders');
      setCustomerOrders(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getAllSellerOrders = useCallback(async (sellerId) => {
    try {
      const { data } = await api.get('/seller/orders', {
        id: sellerId,
      });
      setSellerOrders(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const generateOrderNumber = (base, orderId) => (base + orderId).slice(-(base.length));

  const formatData = (date) => moment(date).format('DD/MM/YYYY');

  socket.on('updateSale', ({ saleId, status }) => {
    setSellerOrders(sellerOrders.map((sellerOrder) => (
      sellerOrder.id === saleId ? { ...order, status } : sellerOrder
    )));
  });

  const toPreparing = (saleId) => socket.emit('preparando', saleId);

  const inTransit = (saleId) => socket.emit('transito', saleId);

  const delivered = (saleId) => socket.emit('entregue', saleId);

  return {
    getOrderById,
    order,
    setOrder,
    customerOrders,
    getAllCustomerOrders,
    generateOrderNumber,
    formatData,
    sellerOrders,
    getAllSellerOrders,
    getSaleById,
    saleOrder,
    toPreparing,
    inTransit,
    delivered,
  };
};

export default useOrders;
