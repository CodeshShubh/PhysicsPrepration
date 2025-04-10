import express from 'express';
import { addVideo, allEditableVideos, courseVideos, deleteVideoById, getPagenetedVideos } from '../../Controllers/Courses/CourseControllers.js';
import {authenticated} from '../../MiddleWares/auth.js'

const router = express.Router();

router.route('/addVideos').post(addVideo)
router.route('/getAllVideos').get(authenticated, getPagenetedVideos)
router.route('/getCourseVideos').get(authenticated, courseVideos)
router.route('/deleteVideos/:id').delete( deleteVideoById)
router.route('/allEditableVideos').get(authenticated, allEditableVideos)







export default router;