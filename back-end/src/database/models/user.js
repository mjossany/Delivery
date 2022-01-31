const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      defaultValue: 'customer',
    },
  },
  {
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.Sale,
      { foreignKey: 'user_id', as: 'customer' },
    ),
    user.hasMany(models.Sale,
      { foreignKey: 'seller_id', as: 'seller' },
    )
  }
  return user;
};

module.exports = User;