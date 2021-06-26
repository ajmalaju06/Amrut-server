import { Router } from "express";
const router = Router();

import employee from "./employee";
import customer from "./customer";
import customerType from "./customerType";
import location from "./location";
import routes from "./routes";
import sales from "./sales";
import loginUser from "./loginUser";

router.post("/save-employee", employee.registerEmployee);
router.post("/get-employee", employee.getEmployees);

router.post("/save-customer", customer.registerCustomer);
router.post("/get-customer", customer.getCustomers);

router.post("/save-cutomer-type", customerType.registerCustomerType);
router.post("/get-cutomer-type", customerType.getCustomerType);

router.post("/save-location", location.registerLocation);
router.post("/get-location", location.getLocation);

router.post("/save-routes", routes.registerRoutes);
router.post("/get-routes", routes.getRoutes);

router.post("/save-sales", sales.registerSales);
router.post("/get-sales", sales.getSales);

router.post("/login", loginUser.checkLoginUser);

export default {
  path: "/api",
  handler: router,
};
