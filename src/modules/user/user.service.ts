import { UserInterface } from "./user.interface";
import { UserModel } from "./user.model";

/**
 * create a single user in DB
 * @param user user data
 * @returns response
 */
const createUserIntoDB = async (user: UserInterface) => {
    const result = await UserModel.create(user);
    return result;
};

/**
 * find all user data from DB
 * @returns response
 */
const getAllUserFromDB = async () => {
    const result = await UserModel.find();
    return result;
}

/**
 * export all user services
 */
export const UserServices = {
    createUserIntoDB, getAllUserFromDB
}