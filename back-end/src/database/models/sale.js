const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Pendente',
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
      { foreignKey: 'userId', as: 'customer' }
    ),
    sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' }
    );
  };
  return sale;
};

module.exports = Sale;