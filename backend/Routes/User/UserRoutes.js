import express from 'express';
import { changePassword, forgetPaasword, getMyProfile, Login, Logout, Register, resetPassword, updatedProfile } from '../../Controllers/User/UserControllers.js';
import { authenticated } from '../../MiddleWares/auth.js';
import { singleUpload } from '../../MiddleWares/multer.js';

const router = express.Router();

router.route('/register').post(Register)

router.route('/login').post(Login)

router.route('/logout').get(Logout)

router.route('/me').get(authenticated, getMyProfile)

router.route('/changepassword').put( changePassword );

router.route('/updateprofile').put(authenticated, singleUpload, updatedProfile)


router.route('/forgetpassword').post(forgetPaasword);

router.route('/resetpassword/:token').put(resetPassword);



export default router;