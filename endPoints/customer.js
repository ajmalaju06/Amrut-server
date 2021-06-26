import schema from "../data/schema";

const model = schema["customer"];

/**
 * save Customer
 */
const registerCustomer = async (req, res) => {
  try {
    let data = req.body;
    let entity = await model.create(data);
    return res.status(200).json({ sucess: true, data: entity });
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, error: "Something went wrong!" });
  }
};

/**
 * Get Customer
 */

const getCustomers = async (req, res) => {
  try {
    let entity = await model.findAll({
      include: [{ all: true }],
    });
    return res.status(200).json({ success: true, data: entity });
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, error: "Something went wrong!" });
  }
};

export default {
  registerCustomer,
  getCustomers,
};
