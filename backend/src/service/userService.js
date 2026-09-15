import  { createUserRepo,getUsersRepo } from "../repository/userRep.js";

export const createUserService = async (userDetails) => {
  const user = await createUserRepo(userDetails);

  return user;
};

export const getUserservice= async ()=>{
    const users= await getUsersRepo();
    return users;
}

