module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "customerType",
    {
      customerTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "customerType",
    }
  );
};
