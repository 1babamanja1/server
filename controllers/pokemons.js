import { pokeSchema, pokeFullDataSchema } from '../models/pokemonList.js';

export const getAll = async (req, resp) => {
  try {
    const pokes = await pokeSchema.find({})
    resp.status(200).json(pokes)
  } catch (error) {
   console.log(error) 
  }
}

export const getFullData = async (req, resp) => {
  let resId = req.params.id.slice(1);
  try {
  const res = await pokeFullDataSchema.find({id: resId})
  resp.status(200).json(res)
} catch (error) {
 console.log(error) 
}
}