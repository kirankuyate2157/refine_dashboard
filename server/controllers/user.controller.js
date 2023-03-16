import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {};
const createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(200).json(userExists);

    const newUser = await User.create({
      name,
      email,
      avatar,
    });
    res.status(200).json(newUser);
  } catch (error) {
    console.log("user post error");
    res.status(500).json({ error: error.message });
  }
};
const getUserInfoByID = async (req, res) => {};

export { getAllUsers, createUser, getUserInfoByID };
