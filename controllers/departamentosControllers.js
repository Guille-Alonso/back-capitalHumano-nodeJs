const CustomError = require("../utils/CustomError");
const DepartamentoDeTrabajo = require("../models/DepartamentoDeTrabajo");

const getDepartamentos = async (req, res) => {
  try {

    const departamentos = await DepartamentoDeTrabajo.find();
    res.status(200).json({departamentos });


  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
    };
  }


const addDepartamento = async (req, res) => {
  try {
    const { nombre,descripcion,estado } =req.body;

    const newDepartamento = new DepartamentoDeTrabajo({
        nombre,
        descripcion,
        estado
    });

    const departamentoSaved = await newDepartamento.save();
    res
      .status(200)
      .json({ message: "El área se agregó con éxito", departamento: departamentoSaved });
  } catch (error) {
    res
    .status(error.code || 500)
    .json({ message: error.message || "algo explotó :|" });
  }
};

const editDepartamento = async(req,res) =>{
  try {
    const campos= req.body;
    const { id } = req.params;
    const departamentoModificado = await DepartamentoDeTrabajo.findByIdAndUpdate(id,campos,{new:true})
      if(!departamentoModificado) throw new CustomError("mal escrito o departamento no encontrado",404)
      res.status(200).json({message:"departamento modificado con exito",departamentoModificado})
  } catch (error) {
      res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
}


const deleteDepartamento = async (req, res) => {
  try {
    const { id } = req.body;
    const departamentoRemoved = await DepartamentoDeTrabajo.findByIdAndDelete(id);
    if (!departamentoRemoved) throw new CustomError("Departamento no encontrado", 404);
    res.status(200).json({ message: "El departamento ha sido eliminado" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

module.exports = {
getDepartamentos,
deleteDepartamento,
editDepartamento,
addDepartamento
};
