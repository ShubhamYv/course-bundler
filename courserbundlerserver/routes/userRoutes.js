import express from "express";
import {
  addToPlaylist,
  changePassword,
  deleteMyProfile,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
  updateProfilePicture,
  updateUserRole,
} from "../controllers/userController.js";
import { authorizedAdmin, isAuthenticated } from "../middlewares/auth.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();

// To register a new user
router.route("/register").post(singleUpload, register);

// login
router.route("/login").post(login);

// logout
router.route("/logout").get(logout);

// get My Profile
router.route("/me").get(isAuthenticated, getMyProfile);

// delete my profile
router.route("/me").delete(isAuthenticated, deleteMyProfile);

// Change my password
router.route("/changepassword").put(isAuthenticated, changePassword);

// Update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

// Update profile picture
router
  .route("/updateprofilepicture")
  .put(isAuthenticated, singleUpload, updateProfilePicture);

// Forget password
router.route("/forgetpassword").post(forgetPassword);

// Reset Password
router.route("/resetpassword/:token").put(resetPassword);

// Add to playlist
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);

// Remove from playlist
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

// ADMIN ROUTES--> get all users
router.route("/admin/users").get(isAuthenticated, authorizedAdmin, getAllUsers);

// Update users role, delete user
router
  .route("/admin/user/:id")
  .put(isAuthenticated, authorizedAdmin, updateUserRole)
  .delete(isAuthenticated, authorizedAdmin, deleteUser);

export default router;
