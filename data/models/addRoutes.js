module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "routes",
    {
      routeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      routeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "routes",
    }
  );
};
