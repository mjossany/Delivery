const { Sale } = require("../../models");

const updateStatus = async (saleId, saleStatus) => {
  const [updateSale] = await Sale.update(
    { status: saleStatus },
    { where: { id: saleId }},
  );
  return updateSale;
};

module.exports = updateStatus;