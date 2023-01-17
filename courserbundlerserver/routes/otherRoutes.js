import express from "express";
import {
  contact,
  courseRequest,
  getDashboardStats,
} from "../controllers/otherController.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// CONTACT FORM
router.route("/contact").post(contact);

// COURSE REQUEST FORM
router.route("/courserequest").post(courseRequest);

// GET ADMIN DASHBOARD STATS
router
  .route("/admin/stats")
  .get(isAuthenticated, authorizedAdmin, getDashboardStats);

export default router;
