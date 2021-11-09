import { userSchema } from "../models/userList.js";
import jwt from 'jsonwebtoken'

export const loginUser = async(req, resp) => {
   const {username, password} = req.body
   const result = await userSchema.find({username: username})
    if (result.length === 0) {

        resp.status(401).end()
}
    if (result[0]?.password === password) {

        const id = result[0].id
        const token = jwt.sign({id, role: result[0].role}, "jwtSecret", {})

        resp.header({"x-access-token": token})
        resp.status(200).send({user: result})
    }
    else {resp.status(409).end()}
};

export const registerUser = async(req, resp) => {
    const {username, email, password} = req.body
    if ((await userSchema.find({username: username})).length !== 0) {
        resp.status(409).json({problem:"username"})
        return
    }
  
    if ((await userSchema.find({email: email})).length !== 0){
        resp.status(409).json({problem:"email"})
        return
    }

    userSchema.insertMany(
        {  
            username:username,
            password: password,
            email: email,
            role: "user",
        }
    );
    resp.status(201).json()
}