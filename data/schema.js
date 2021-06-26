import Sequelize from "sequelize";
import { dbConfig } from "./../serverconfig";

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: {
      timestamps: false,
    },
  }
);

let db = {};

db["sales"] = require("./models/sales")(sequelize, Sequelize);
db["routes"] = require("./models/addRoutes")(sequelize, Sequelize);
db["customer"] = require("./models/customer")(sequelize, Sequelize);
db["customerType"] = require("./models/customerType")(sequelize, Sequelize);
db["employee"] = require("./models/employee")(sequelize, Sequelize);
db["location"] = require("./models/location")(sequelize, Sequelize);

db["customer"].belongsTo(db.employee, {
  foreignKey: "employeeId",
  constraints: false,
});
db["customer"].belongsTo(db.routes, {
  foreignKey: "routeId",
  constraints: false,
});
db["customer"].belongsTo(db.customerType, {
  foreignKey: "customerTypeId",
  constraints: false,
});
db["sales"].belongsTo(db.routes, {
  foreignKey: "routeId",
  constraints: false,
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
