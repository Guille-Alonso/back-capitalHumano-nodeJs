const { Router } = require("express");
const { getAptitudes, addAptitud, editAptitud, deleteAptitud } = require("../controllers/aptitudesControllers");

const router = Router();

router.get("/", getAptitudes );
router.post("/", addAptitud );
router.put("/:id",editAptitud)
router.delete("/",deleteAptitud);

module.exports = router;