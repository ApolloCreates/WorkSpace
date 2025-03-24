import bcrypt, { hash } from "bcrypt";
import User from "./models/users.js";
import connectDB from './db/db.js';

const userRegister = async () => {
    try {
        connectDB();
        const hashpassword = await bcrypt.hash('admin', 10);
        const user = new User({
            name: 'Admin',
            email: 'admin@gmail.com',
            password: hashpassword,
            role: 'admin'
        });
        await user.save();
        console.log('Admin Created');
        console.log(user)
    } catch (error) {
        console.log(error);
    }
 }

userRegister();