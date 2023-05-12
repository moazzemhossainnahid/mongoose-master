export interface IUser {
    id: string,
    roll: "student",
    password: string,
    name: {
        firstName: string,
        middleName: string,
        lastName: string,
    },
    dateOfBirth?: string,
    gender: "male" | "female",
    email?: string,
    contactNo?: string,
    emergencyContactNo?: string,
    presentAddress?: string,
    permanentAddress?: string

};