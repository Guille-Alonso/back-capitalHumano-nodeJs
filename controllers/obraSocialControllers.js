const CustomError = require("../utils/CustomError");
const ObraSocial = require("../models/ObraSocial");

const getobraSociales = async (req, res) => {
  try {

    const obraSociales = await ObraSocial.find();
    res.status(200).json({obraSociales });

  
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
    };
  }


const addObraSocial = async (req, res) => {
  try {
    const { nombre,domicilio, telefono, cuit } =req.body;
   
    const newobraSocial = new ObraSocial({
        nombre,
        domicilio,
        telefono,
        cuit,
    });

    const obraSocialSaved = await newobraSocial.save();
    res
      .status(200)
      .json({ message: "El obraSocial se agregó con éxito", obraSocial: obraSocialSaved });
  } catch (error) {
    res
    .status(error.code || 500)
    .json({ message: error.message || "algo explotó :|" });
  }
};

const editObraSocial = async(req,res) =>{
  try {
    const campos= req.body;
    const { id } = req.params;
    const obraSocialModificado = await ObraSocial.findByIdAndUpdate(id,campos,{new:true})
      if(!obraSocialModificado) throw new CustomError("mal escrito o obraSocial no encontrado",404)
      res.status(200).json({message:"obraSocial modificado con exito",obraSocialModificado})
  } catch (error) {
      res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
}


const deleteObraSocial = async (req, res) => {
  try {
    const { id } = req.body;
    const obraSocialRemoved = await ObraSocial.findByIdAndDelete(id);
    if (!obraSocialRemoved) throw new CustomError("obraSocial no encontrado", 404);
    res.status(200).json({ message: "El obraSocial ha sido eliminado" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

module.exports = {
getobraSociales,
deleteObraSocial,
editObraSocial,
addObraSocial
};
