import schema from "../data/schema";

const model = schema["customerType"];

/**
 * Save Customer Type
 */

const registerCustomerType = async (req, res) => {
  try {
    let data = req.body;
    let entity = await model.create(data);
    return res.status(200).json({ success: true, data: entity });
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, error: "Something went wrong!" });
  }
};

const getCustomerType = async (req, res) => {
  try {
    let entity = await model.findAll();
    return res.status(200).json({ success: true, data: entity });
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, error: "Something went wrong!" });
  }
};

export default {
  registerCustomerType,
  getCustomerType,
};
