const Empleado = require("../models/Empleado");
const CustomError = require("../utils/CustomError");

const getEmpleados = async (req, res) => {
    try {
        if(req.params.dni){
            const empleado = await Empleado.findOne({dni:req.params.dni});
            if(!empleado) throw new CustomError("empleado no encontrado", 404);
            res.status(200).json({empleado});
           }
           else{
            const empleados = await Empleado.find();
            res.status(200).json({empleados });
           } 
    } catch (error) {
        res
        .status(error.code || 500)
        .json({ message: error.message || "algo explotó :|" });
      };
    }
  
  
  const addEmpleado = async (req, res) => {
    try {
      const { nombre,apellido,email,legajo,edad,dni,domicilio,genero,foto } =
        req.body;
     
      const newEmpleado = new Empleado({
        nombre,
        apellido,
        email,
        dni,
        domicilio,
        genero,
        legajo,
        edad,
        foto
      });
  
      const empleadoSaved = await newEmpleado.save();
      res
        .status(200)
        .json({ message: "El usuario se agregó con éxito", empleado: empleadoSaved });
    } catch (error) {
        res
        .status(error.code || 500)
        .json({ message: error.message || "algo explotó :|" });
    }
  };
  
  const editEmpleado = async(req,res) =>{
    try {
        const {dni,campos}= req.body;
        const empleadoModificado = await Empleado.findOneAndUpdate({dni:dni},campos,{new:true})
        res.status(200).json({message:"empleado modificado con exito",empleadoModificado})
    } catch (error) {
        res
        .status(error.code || 500)
        .json({ message: error.message || "algo explotó :|" });
    }
  }
  
  const deleteEmpleado = async (req, res) => {
    try {
      const { id } = req.body;
      const empleadoRemoved = await Empleado.findByIdAndDelete(id);
      if (!empleadoRemoved) throw new CustomError("Usuario no encontrado", 404);
      res.status(200).json({ message: "El usuario ha sido eliminado" });
    } catch (error) {
      res
        .status(error.code || 500)
        .json({ message: error.message || "algo explotó :|" });
    }
  };
  
  module.exports = {
    getEmpleados,
    addEmpleado,
    editEmpleado,
    deleteEmpleado,
  };
  
