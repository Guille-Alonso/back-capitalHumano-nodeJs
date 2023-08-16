const { Schema, model, SchemaType } = require("mongoose");
const mongooseUniqueValidation = require("mongoose-unique-validation");

const PuestoSchema = new Schema(
    {
    nombre:{
    type: String,
    trim: true,
    required: [true, "nombre obligatorio"],
<<<<<<< HEAD
=======
    unique:true
>>>>>>> 749d73823840cb9d9264e80b5180dea5af7a8563
    },
    descripcion:{
    type: String,
    trim: true
    },
    sueldoBase:{
    type: Number,
    required: [true, "sueldo obligatorio"],
    },
    inicio:{
<<<<<<< HEAD
    type: String, 
    required: [true, "fecha inicio obligatoria"],
=======
    type: String
>>>>>>> 749d73823840cb9d9264e80b5180dea5af7a8563
    },
    estado:{
    type: String,
    enum: ["activo", "inactivo"]
    }

},
{
    timestamps: false,
    versionKey: false,
  }
  );

  PuestoSchema.plugin(mongooseUniqueValidation,{
    message: '{PATH} debe ser único'
    })

module.exports = model("PuestoDeTrabajo", PuestoSchema);