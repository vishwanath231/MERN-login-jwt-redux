import { Router } from 'express';
const router = Router();
import { registerUser, loginUser, getuser } from '../controller/authController.js'
import protect from '../middleware/authMiddleware.js';


router.route('/register').post(registerUser);

router.route('/login').post(loginUser);

router.route('/user').get(protect, getuser);


export default router;