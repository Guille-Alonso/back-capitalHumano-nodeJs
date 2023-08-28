const { Router } = require("express");
const { getobraSociales, addObraSocial, editObraSocial, deleteObraSocial } = require("../controllers/obraSocialControllers");

const router = Router();

router.get("/", getobraSociales);
router.post("/",  addObraSocial);
router.put("/:id",editObraSocial)
router.delete("/",deleteObraSocial);

module.exports = router;