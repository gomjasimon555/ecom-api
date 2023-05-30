const express = require("express");

const {
  getSingalUser,
  deleteUserData,
  updateData,
  getAllUsers,
} = require("../controllers/user");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:userID", getSingalUser);
router.patch("/:userID", updateData);
router.delete("/:userID", deleteUserData);

module.exports = router;
