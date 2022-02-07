import { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
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

  const getAllCustomerOrders = useCallback(async () => {
    try {
      const { data } = await api.get('/customer/orders');
      setCustomerOrders(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const generateOrderNumber = (base, id) => (base + id).slice(-(base.length));

  const formatData = (date) => moment(date).format('DD/MM/YYYY');

  useEffect(() => {
    getAllCustomerOrders();
  }, [getAllCustomerOrders]);

  return {
    getOrderById,
    order,
    setOrder,
    customerOrders,
    getAllCustomerOrders,
    generateOrderNumber,
    formatData,
  };
};

export default useOrders;
