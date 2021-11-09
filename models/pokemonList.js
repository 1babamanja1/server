import mongoose from 'mongoose'
const { Schema, model } = mongoose

const pkSchema = new Schema ({
    id:  String,
    name:  String,
},
{
    collection: 'pokemon-list'
})

const pkFullDataSchema = new Schema ({
    id:  String,
    name:  String,
    pic:  String,
    type: [String],
    details: {
        height: Number,
          weight: Number,
          birthday: String,
          category: [String],
          weakness: [String],
    },
},
    {
        collection: 'pokemon-list',
        versionKey: false 
    });

export const pokeSchema = model('pokeSchema', pkSchema);
export const pokeFullDataSchema = model('pokeFullDataSchema', pkFullDataSchema);