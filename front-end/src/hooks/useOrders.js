import { useCallback, useState } from 'react';
import api from '../services/api';

const useOrders = () => {
  const [customerOrders, setCustomerOrders] = useState([]);
  const [order, setOrder] = useState(null);

  const getOrderById = useCallback(async (id) => {
    try {
      const { data } = await api.get(`/customer/orders/${id}`);
      setOrder(data.orderDetails);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getAllCustomerOrders = useCallback(async (userId) => {
    try {
      const { data } = await api.get('/customer/orders', { userId });
      console.log(data);
      setCustomerOrders(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return {
    getOrderById,
    orders,
    setOrders,
    order,
    setOrder,
    customerOrders,
    getAllCustomerOrders,
  };
};

export default useOrders;
