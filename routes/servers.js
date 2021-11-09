import { Router } from 'express';
import { getAll, getFullData } from '../controllers/pokemons.js';
import { loginUser, registerUser } from '../controllers/users.js';
import jwt from 'jsonwebtoken'

const router = Router()

const verifyJwt = (req, res, next) => {
    const token = req.headers["authorization"]
    if(!token){
        res.status(498).end()
    }else{
        jwt.verify(token, "jwtSecret", (err) => {
           if (err){
               console.log(token);
               res.status(498).end()
           } else {
                next()
           }
        })
    }
}

router.get('/api/pokemon-list', verifyJwt, getAll)
router.get('/api/pokemons:id', verifyJwt, getFullData)
router.post('/api/registration', registerUser)
router.post('/api/login', loginUser)



export default router