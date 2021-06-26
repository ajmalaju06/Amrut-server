module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "sales",
    {
      salesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      typeOfBuilding: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      buildingNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qtyOfSale: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qtyEmptyReturn: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      freeOfCost: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      typeOfPayment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cashRecieved: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      couponRecieved: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      creditRecieved: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      balanceCredit: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bottleStatus: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "sales",
    }
  );
};
