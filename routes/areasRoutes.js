const { Router } = require("express");
const { getAreas, addArea, editArea, deleteArea } = require("../controllers/areasControllers");

const router = Router();

router.get("/", getAreas);
router.post("/",  addArea);
router.put("/:id",editArea)
router.delete("/",deleteArea);

module.exports = router;