import express from "express";
import {
  buySubscription,
  cancelSubscription,
  getRazorPayKey,
  paymentVerification,
} from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Buy Subscription
router.route("/subscribe").get(isAuthenticated, buySubscription);

// payment verification and save references in database
router.route("/paymentverification").post(isAuthenticated, paymentVerification);

// GET RAZORPAY KEY
router.route("/razorpaykey").get(getRazorPayKey);

// CANCEL SUBSCRIPTION
router.route("/subscribe/cancel").delete(isAuthenticated, cancelSubscription);

export default router;
