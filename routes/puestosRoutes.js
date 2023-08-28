const { Router } = require("express");
const { getPuestos, addPuesto, editPuesto, deletePuesto } = require("../controllers/puestosControllers");

const router = Router();

router.get("/", getPuestos);
router.post("/",  addPuesto);
router.put("/:id",editPuesto)
router.delete("/",deletePuesto);

module.exports = router;