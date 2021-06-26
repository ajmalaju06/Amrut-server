import schema from "../data/schema";

const model = schema["employee"];

/**
 * save Customer
 */
const checkLoginUser = async (req, res) => {
  try {
    let data = req.body;
    let entity = await model.findOne({
      where: {
        name: data.name,
        password: data.password,
      },
    });
    if (entity !== null) {
      //   entity = {
      //     name: entity.name,
      //     designation: entity.designation,
      //   };
      return res.status(200).json({ success: true, data: entity });
    } else {
      return res
        .status(200)
        .json({ success: false, error: "Invalid Credential" });
    }
  } catch (error) {
    return res
      .status(200)
      .json({ success: false, error: "Invalid Credential" });
  }
};

export default {
  checkLoginUser,
};
