module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "location",
    {
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      locationName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "location",
    }
  );
};
