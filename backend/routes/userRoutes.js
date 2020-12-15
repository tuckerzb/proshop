import express from 'express';
const router = express.Router();
import {authUser, getUserProfile, registerUser, udpateUserProfile} from '../controllers/userController.js'
import {protect} from '../middleware/authMiddleware.js'

router.post('/', registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, udpateUserProfile);

export default router;