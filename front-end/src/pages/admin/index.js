import React from 'react';

const Admin = () => {
  const a = 'Cadastrar';
  return (
    <div>
      <input type="name" data-testid="admin_manage__input-name" />
      <input type="email" data-testid="admin_manage__input-email" />
      <input type="password" data-testid="admin_manage__input-password" />
      <select data-testid="admin_manage__select-role">
        <option value="custumer">Custumer</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" data-testid="admin_manage__button-register">{ a }</button>
    </div>
  );
};

export default Admin;
