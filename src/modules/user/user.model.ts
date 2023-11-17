import { Schema, model } from "mongoose";
import { UserAddress, UserInterface, UserName } from "./user.interface";

/**
 * user name schema
 */
const userNameSchema = new Schema<UserName>({
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true }
});

/**
 * user address schema
 */
const userAddressSchema = new Schema<UserAddress>({
    houseNo: { type: String },
    road: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
})

/**
 * user schema
 */
const userSchema = new Schema<UserInterface>({
    name: userNameSchema,
    email: { type: String, required: true },
    gender: ['male', 'female', 'other'],
    contactNo: { type: String },
    dateOfBirth: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    profileImg: { type: String },
    address: userAddressSchema,
    isActive: { type: Boolean, required: true },
})

/**
 * user model based on schema
 */
export const UserModel = model<UserInterface>('User', userSchema);