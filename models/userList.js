import mongoose from 'mongoose'
const { Schema, model } = mongoose

const usSchema = new Schema ({
    username:  String,
    password:  String,
    email: String,
    role: String,
    token: String,
},
{
    collection: 'user-list',
    versionKey: false 
})


export const userSchema = model('userSchema', usSchema);
