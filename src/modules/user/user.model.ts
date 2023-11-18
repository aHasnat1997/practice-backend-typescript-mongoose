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
    name: { type: userNameSchema, required: [true, 'user name is required'] },
    email: { type: String, required: true },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: "Do not use {VALUE} use 'male' or 'female' or 'other'"
        },
        required: [true, 'gender is required']
    },
    contactNo: { type: String },
    dateOfBirth: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    profileImg: { type: String },
    address: { type: userAddressSchema, required: true },
    isActive: { type: Boolean, required: true },
})

/**
 * user model based on schema
 */
export const UserModel = model<UserInterface>('User', userSchema);