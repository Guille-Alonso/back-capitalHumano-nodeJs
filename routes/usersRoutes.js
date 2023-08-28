const { Router } = require("express");

const router = Router();
const {
  getUsers,
  addUser,
  login,
  deleteUser,
  editUser
} = require("./../controllers/usersControllers");

router.get("/:nombre?", getUsers);
router.post("/",  addUser);
router.post("/login",login);
router.put("/:id",editUser)
router.delete("/",deleteUser);

module.exports = router;
