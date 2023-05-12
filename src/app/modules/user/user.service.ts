import { IUser } from "./user.interface";
import User from "./user.model";

// export const createUserToDB = async() => {
//     const user = await new User({
//         id: '757',
//         roll: "student",
//         password: 'password wrong',
//         name: {
//             firstName: "MD.",
//             middleName: "Nahid",
//             lastName: "Hasan",
//         },
//         dateOfBirth: "6/4/1999",
//         gender: "male",
//         email: "moazzemhossainnahid@gmail.com",
//         contactNo: "01636090316",
//         emergencyContactNo: "01927962955",
//         presentAddress: "Mirzapur, Pakundia, Kishoreganj",
//         permanentAddress: "Kapasia-1730, Gazipur"
//     })

//     await user.save();
//     return user;
//     console.log(user);
// };
export const createUserToDB = async(payload:IUser):Promise<IUser> => {
    const user = new User(payload)
    await user.save();
    console.log(user);
    return user;
};

export const getAllUsersFromDB = async():Promise<IUser[]> => {
    const users = await User.find();
    console.log(users);
    return users;
};

export const getUserByIdFromDB = async(payload:string):Promise<IUser | null> => {
    const user = await User.findOne({id:payload});
    console.log(user);
    return user;
};
