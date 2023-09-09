const { default: mongoose } = require("mongoose");
const CustomError = require("../utils/CustomError");
const AreaDeTrabajo = require("../models/AreaDeTrabajo");

const getAreas = async (req, res) => {
  try {

    const areas = await AreaDeTrabajo.find();
    res.status(200).json({areas });


  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
    };
  }


const addArea = async (req, res) => {
  try {
    const { nombre,descripcion,estado, departamento } =req.body;

    const newArea = new AreaDeTrabajo({
        nombre,
        descripcion,
        estado,
        departamento: new mongoose.Types.ObjectId(departamento),
    });

    const areaSaved = await newArea.save();
    res
      .status(200)
      .json({ message: "El área se agregó con éxito", area: areaSaved });
  } catch (error) {
    res
    .status(error.code || 500)
    .json({ message: error.message || "algo explotó :|" });
  }
};

const editArea = async(req,res) =>{
  try {
    // const campos= req.body;
    // const { id } = req.params;
    // const areaModificada = await AreaDeTrabajo.findByIdAndUpdate(id,campos,{new:true})
    //   if(!areaModificada) throw new CustomError("mal escrito u área no encontrada",404)
    //   res.status(200).json({message:"área modificada con exito",areaModificada})
    let campos= req.body;
    const { id } = req.params;
    campos = {
      ...campos,
      departamento: new mongoose.Types.ObjectId(campos.departamento),
    }
    const areaModificada = await AreaDeTrabajo.findByIdAndUpdate(id,campos,{new:true})
      if(!areaModificada) throw new CustomError("mal escrito u área no encontrada",404)
      res.status(200).json({message:"área modificada con exito",areaModificada})
  } catch (error) {
      res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
}


const deleteArea = async (req, res) => {
  try {
    const { id } = req.body;
    const areaRemoved = await AreaDeTrabajo.findByIdAndDelete(id);
    if (!areaRemoved) throw new CustomError("Área no encontrada", 404);
    res.status(200).json({ message: "El área ha sido eliminada" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

module.exports = {
getAreas,
deleteArea,
editArea,
addArea
};
