const { Router } = require("express");
const { getDepartamentos, addDepartamento, editDepartamento, deleteDepartamento } = require("../controllers/departamentosControllers");

const router = Router();

router.get("/", getDepartamentos);
router.post("/",  addDepartamento);
router.put("/:id", editDepartamento)
router.delete("/", deleteDepartamento);

module.exports = router;