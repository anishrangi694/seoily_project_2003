import  { createUserService,getUserservice } from "../service/userService.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);

    return res.status(201).json({
      message: "Successfully created the user",
      data: user,
      error: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "User not created",
      data: {},
      error: error.message,
      success: false,
    });
  }
};


export const getUsers = async (req, res) => {
  try {
    const users = await getUserservice();

    console.log("Users from service:", users);

    return res.status(200).json({
      message: "Users fetched successfully",
      data: users,
      error: {},
      success: true,
    });
  } catch (error) {
    console.log("GET USERS ERROR:", error);

    return res.status(500).json({
      message: "Users not fetched",
      data: {},
      error: error.message,
      success: false,
    });
  }
};

