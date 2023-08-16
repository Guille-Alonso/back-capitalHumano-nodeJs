const PuestoDeTrabajo = require("../models/PuestoDeTrabajo");
const CustomError = require("../utils/CustomError");

const getPuestos = async (req, res) => {
    try {
        if(req.params.id){
            const puesto = await PuestoDeTrabajo.findOne({_id:req.params.id});
            if(!puesto) throw new CustomError("puesto no encontrado", 404);
            res.status(200).json({puesto});
           }
           else{
            const puestos = await PuestoDeTrabajo.find();
            res.status(200).json({puestos });
           } 
    } catch (error) {
        res
        .status(error.code || 500)
        .json({ message: error.message || "algo explotó :|" });
      };
    }
  
  
  const addPuesto = async (req, res) => {
    try {
      const { nombre,descripcion,sueldoBase,inicio,estado} =
        req.body;
     
      const newPuesto = new PuestoDeTrabajo({
        nombre,
        descripcion,
        sueldoBase,
        inicio,
        estado,
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
        const {id,campos}= req.body;
        const puestoModificado = await PuestoDeTrabajo.findByIdAndUpdate(id,campos,{new:true})
        if(!puestoModificado) throw new CustomError("mal escrito o id no encontrado",404)
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
      res.status(200).json({ message: "El Puesto ha sido eliminado" });
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.message || "algo explotó :|" });
    }
  };
  
  module.exports = {
    getPuestos,
    addPuesto,
    editPuesto,
    deletePuesto,
  };
  