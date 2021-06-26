module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "customer",
    {
      saleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      emirate: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      typeOfCustomer: {
        type: DataTypes.STRING,
        allowNull: false,
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      couponSold: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      previousBrand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      qtyOfJarSold: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qtyOfJarreturn: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comments: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "customer",
    }
  );
};
