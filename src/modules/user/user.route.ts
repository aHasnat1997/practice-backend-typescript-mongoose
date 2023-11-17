import express from "express";
import { UserControllers } from "./user.controller";

// cerate  user api routes 
export const UserRoute = express.Router();

// api route for create single user
UserRoute.post('/', UserControllers.userCreate);

// api route for get all user
UserRoute.get('/', UserControllers.getAllUser);