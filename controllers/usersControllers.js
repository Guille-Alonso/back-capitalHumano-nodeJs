const Usuario = require("../models/Usuario");
const CustomError = require("../utils/CustomError");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  try {
   if(req.params.nombre){
    const user = await Usuario.findOne({nombre:req.params.nombre});
    res.status(200).json({user});
   }
   else{
    const users = await Usuario.find();
    res.status(200).json({users });
   } 
  
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
    };
  }


const addUser = async (req, res) => {
  try {
    const { nombre,contraseña } =
      req.body;
      const salt = await bcrypt.genSalt(10);
    const passwordEncrypted = await bcrypt.hash(contraseña, salt);
   
    const newUser = new Usuario({
      nombre,
      contraseña: passwordEncrypted,
    });

    const userSaved = await newUser.save();
    res
      .status(200)
      .json({ message: "El usuario se agregó con éxito", user: userSaved });
  } catch (error) {
    res
    .status(error.code || 500)
    .json({ message: error.message || "algo explotó :|" });
  }
};

const login = async (req, res) => {
  try {
    const {  nombre,contraseña } = req.body;
    if (!nombre || !contraseña)
      throw new CustomError("Usuario y contraseña son requeridas", 400);
    const user = await Usuario.findOne({ nombre });
    if (!user) throw new CustomError("Usuario no encontrado", 404);
    const passOk = await bcrypt.compare(contraseña, user.contraseña);
    if (!passOk) throw new CustomError("Contraseña incorrecta", 400);

    res
      .status(200)
      .json({ message: "Ingreso correcto", ok: true, user});
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

const editUser = async(req,res) =>{
  try {
      const {nombre,campos}= req.body;
      const usuarioModificado = await Usuario.findOneAndUpdate({nombre:nombre},campos,{new:true})
      res.status(200).json({message:"usuario modificado con exito",usuarioModificado})
  } catch (error) {
      res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
}


const deleteUser = async (req, res) => {
  try {
    const { id } = req.body;
    const userRemoved = await Usuario.findByIdAndDelete(id);
    if (!userRemoved) throw new CustomError("Usuario no encontrado", 404);
    res.status(200).json({ message: "El usuario ha sido eliminado" });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "algo explotó :|" });
  }
};

module.exports = {
  getUsers,
  addUser,
  login,
  deleteUser,
  editUser
};
