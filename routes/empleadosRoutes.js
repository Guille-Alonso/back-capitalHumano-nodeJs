const { Router } = require("express");

const router = Router();
const {
    getEmpleados,
    addEmpleado,
    editEmpleado,
    deleteEmpleado,
} = require("./../controllers/empleadosControllers");

router.get("/:dni?", getEmpleados);
router.post("/",  addEmpleado);
router.put("/:id",editEmpleado)
router.delete("/",deleteEmpleado);
module.exports = router;
