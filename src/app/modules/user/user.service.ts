import User from "./user.model";

export const createUserToDB = async() => {
    const user = await new User({
        id: '767',
        roll: "student",
        password: 'password nai',
        name: {
            firstName: "MD.",
            middleName: "Nahid",
            lastName: "Hasan",
        },
        dateOfBirth: "6/4/1999",
        gender: "male",
        email: "moazzemhossainnahid@gmail.com",
        contactNo: "01636090316",
        emergencyContactNo: "01927962955",
        presentAddress: "Mirzapur, Pakundia, Kishoreganj",
        permanentAddress: "Kapasia-1730, Gazipur"
    })

    await user.save();
    console.log(user);
};
