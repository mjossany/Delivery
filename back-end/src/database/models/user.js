const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.Sale,
      { foreignKey: 'user_id', as: 'sales' },
      { foreignKey: 'seller_id', as: 'seller' });
  }
  return user;
};

module.exports = User;