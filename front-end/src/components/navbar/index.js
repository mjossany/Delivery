import React, { useContext } from 'react';
import { UserContext } from '../../context/user';
import { ListItem, NavbarList } from './styles';

const NavBar = () => {
  const { user } = useContext(UserContext);
  return (
    <NavbarList>
      <ListItem data-testid="customer_products__element-navbar-link-products">
        Produtos
      </ListItem>
      <ListItem data-testid="customer_products__element-navbar-link-orders">
        Meus dados
      </ListItem>
      <ListItem
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
      </ListItem>
      <ListItem data-testid="customer_products__element-navbar-link-logout">
        Sair
      </ListItem>
    </NavbarList>
  );
};

export default NavBar;
