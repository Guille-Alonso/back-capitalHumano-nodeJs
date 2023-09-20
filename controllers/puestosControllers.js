const { default: mongoose } = require("mongoose");
const CustomError = require("../utils/CustomError");
const PuestoDeTrabajo = require("../models/PuestoDeTrabajo");

const getPuestos = async (req, res) => {
  try {
    const puestos = await PuestoDeTrabajo.find().populate("area");
    res.status(200).json({puestos });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
    };
  }


const addPuesto = async (req, res) => {
  try {
    const { nombre, descripcion, sueldoBase, inicio, estado, area } =req.body;
   
    const newPuesto = new PuestoDeTrabajo({
        nombre,
        descripcion,
        sueldoBase,
        inicio,
        estado,
        area: new mongoose.Types.ObjectId(area),
    });

    const puestoSaved = await newPuesto.save();
    res
      .status(200)
      .json({ message: "El puesto se agregó con éxito", puesto: puestoSaved });
  } catch (error) {
    res
    .status(error.code || 500)
    .json({ message: error.message || "algo explotó :|" });
  }
};

const editPuesto = async(req,res) =>{
  try {
    let campos= req.body;
    const { id } = req.params;
    campos = {
      ...campos,
      area: new mongoose.Types.ObjectId(campos.area),
    }
    const puestoModificado = await PuestoDeTrabajo.findByIdAndUpdate(id,campos,{new:true})
      if(!puestoModificado) throw new CustomError("mal escrito o puesto no encontrado",404)
      res.status(200).json({message:"puesto modificado con exito",puestoModificado})
  } catch (error) {
      res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
}


const deletePuesto = async (req, res) => {
  try {
    const { id } = req.body;
    const puestoRemoved = await PuestoDeTrabajo.findByIdAndDelete(id);
    if (!puestoRemoved) throw new CustomError("Puesto no encontrado", 404);
    res.status(200).json({ message: "El puesto ha sido eliminado" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

module.exports = {
getPuestos,
deletePuesto,
editPuesto,
addPuesto
};
