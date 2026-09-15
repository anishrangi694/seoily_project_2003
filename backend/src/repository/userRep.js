import User from "../Schema/userSchema.js";

export const createUserRepo = async (userDetails) => {
  try {

    const user = await User.create(userDetails);

    return user;
  } catch (error) {
    console.log("User not created at repo layer");
    console.log("ERROR:", error);
    throw error;
  }
};

export const getUsersRepo = async () => {
  try {
    const users = await User.find();

    return users;
  } catch (error) {
    console.log("Users not fetched at repo layer");
    throw error;
  }
};

