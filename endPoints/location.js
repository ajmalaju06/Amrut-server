import schema from "../data/schema";

const model = schema["location"];

/**
 * save Location
 */
const registerLocation = async (req, res) => {
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

/**
 * Get Location
 */

const getLocation = async (req, res) => {
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
  registerLocation,
  getLocation,
};
