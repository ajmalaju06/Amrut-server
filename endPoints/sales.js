import schema from "../data/schema";

const model = schema["sales"];

/**
 * save Sales
 */
const registerSales = async (req, res) => {
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
 * Get Sales
 */

const getSales = async (req, res) => {
  try {
    let data = req.body;
    let entity = await model.findAll({
      include: {
        all: true,
      },
      order: [["salesId", "DESC"]],
    });
    // if (entity !== null) {
    //   return res.status(200).json({ success: true, data: entity });
    // } else {
    //   return res
    //     .status(200)
    //     .json({ success: false, error: "No records available" });
    // }
    return res.status(200).json({ success: true, data: entity });
  } catch (error) {
    console.log(error);
    return res
      .status(200)
      .json({ success: false, error: "Something went wrong!" });
  }
};

export default {
  registerSales,
  getSales,
};
