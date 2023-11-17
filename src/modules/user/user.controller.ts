import { Request, Response } from "express";
import { UserServices } from "./user.service";

/**
 * controller for creating user in DB 
 * @param req request data
 * @param res response data
 */
const userCreate = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = req.body;
        const result = await UserServices.createUserIntoDB(userData);

        res.status(200).json({
            success: true,
            massage: 'user data successfully cerated',
            date: result
        })

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            massage: error
        });
    }
};

/**
 * controller for getting all user data
 * @param req request data
 * @param res response data
 */
const getAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await UserServices.getAllUserFromDB();

        res.status(200).json({
            success: true,
            massage: 'all user data get successfully',
            doc: result
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            massage: error
        });
    }
}

/**
 * export all user controllers
 */
export const UserControllers = {
    userCreate, getAllUser
};