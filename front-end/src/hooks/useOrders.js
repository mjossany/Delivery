import { useCallback, useState } from 'react';
import api from '../services/api';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);

  const getOrderById = useCallback(async (id) => {
    try {
      const { data } = await api.get(`/customer/orders/${id}`);
      console.log(data);
      setOrder(data.orderDetails);
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
  };
};

export default useOrders;
