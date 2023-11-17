// user name interface
export type UserName = {
    firstName: string;
    middleName?: string;
    lastName: string
};

// user address type interface
export type UserAddress = {
    houseNo?: string;
    road: string;
    city: string;
    country: string;
}

// user interface
export type UserInterface = {
    name: UserName;
    email: string;
    contactNo?: string;
    gender: 'male' | 'female' | 'other';
    dateOfBirth: string;
    address: UserAddress;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    profileImg?: string;
    isActive: boolean;
};