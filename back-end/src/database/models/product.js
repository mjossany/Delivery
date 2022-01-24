const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  return product;
};

module.exports = Product;