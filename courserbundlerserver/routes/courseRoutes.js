import express from "express";
import {
  addLecture,
  CreateCourse,
  deleteCourse,
  deleteLecture,
  getAllCourse,
  getCourseLectures,
} from "../controllers/courseController.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// get all courses without lectures
router.route("/courses").get(getAllCourse);

// create new course - only admin
router
  .route("/createcourse")
  .post(isAuthenticated, authorizedAdmin, singleUpload, CreateCourse);

// add lecture, delete course, get course details
router
  .route("/course/:id")
  .get(isAuthenticated, getCourseLectures)
  .post(isAuthenticated, authorizedAdmin, singleUpload, addLecture)
  .delete(isAuthenticated, authorizedAdmin, deleteCourse);

// delete lecture
router
  .route("/lecture")
  .delete(isAuthenticated, authorizedAdmin, deleteLecture);

export default router;
