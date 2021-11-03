import { Router } from 'express';
import { getAll, getFullData } from '../controllers/pokemons.js';
import { loginUser, registerUser } from '../controllers/users.js';

const router = Router()

router.get('/api/pokemon-list', getAll)
router.get('/api/pokemons:id', getFullData)
router.post('/api/registration', registerUser)
router.post('/api/login', loginUser)

export default router