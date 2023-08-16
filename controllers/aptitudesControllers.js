const CustomError = require("../utils/CustomError");
const Aptitud = require("../models/Aptitud");

const getAptitudes = async (req, res) => {
  try {

    const Aptitudes = await Aptitud.find();
    res.status(200).json({Aptitudes });

  
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
    };
  }


const addAptitud = async (req, res) => {
  try {
    const { nombre,descripcion } =req.body;
   
    const newAptitud = new Aptitud({
        nombre,
        descripcion
    });

    const Aptitudesaved = await newAptitud.save();
    res
      .status(200)
      .json({ message: "El Aptitud se agregó con éxito", Aptitud: Aptitudesaved });
  } catch (error) {
    res
    .status(error.code || 500)
    .json({ message: error.message || "algo explotó :|" });
  }
};

const editAptitud = async(req,res) =>{
  try {
      const {id,campos}= req.body;
      const aptitudModificada = await Aptitud.findByIdAndUpdate({id:id},campos,{new:true})
      if(!aptitudModificada) throw new CustomError("mal escrito o Aptitud no encontrado",404)
      res.status(200).json({message:"aptitud modificada con exito",aptitudModificada})
  } catch (error) {
      res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
}


const deleteAptitud = async (req, res) => {
  try {
    const { id } = req.body;
    const AptitudRemoved = await Aptitud.findByIdAndDelete(id);
    if (!AptitudRemoved) throw new CustomError("Aptitud no encontrado", 404);
    res.status(200).json({ message: "El Aptitud ha sido eliminado" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

module.exports = {
getAptitudes,
deleteAptitud,
editAptitud,
addAptitud
};
