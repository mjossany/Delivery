import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';
import { ListItem, NavbarList } from './styles';

const NavBar = () => {
  const { user, handleLogout } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <NavbarList>
      <ListItem data-testid="customer_products__element-navbar-link-products">
        Produtos
      </ListItem>
      <ListItem
        onClick={ () => navigate('/customer/orders') }
        data-testid="customer_products__element-navbar-link-orders"
      >
        Meus Pedidos
      </ListItem>
      <ListItem
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </ListItem>
      <ListItem
        onClick={ () => handleLogout() }
        data-testid="customer_products__element-navbar-link-logout"
      >
        Sair
      </ListItem>
    </NavbarList>
  );
};

export default NavBar;
