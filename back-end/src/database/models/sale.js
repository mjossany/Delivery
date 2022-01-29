const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: {
      type: DataTypes.STRING,
      defautlValue: 'Pendente',
    },
  },
  {
    createdAt: 'saleDate',
    updatedAt: false,
    underscored: true,
    tableName: 'sales'
  });

  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'customer' },
      { foreignKey: 'seller_id', as: 'seller' });
  };
  return sale;
};

module.exports = Sale;