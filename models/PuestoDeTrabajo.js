const { Schema, model, SchemaType } = require("mongoose");
const mongooseUniqueValidation = require("mongoose-unique-validation");

const PuestoSchema = new Schema(
    {
    nombre:{
    type: String,
    trim: true,
    required: [true, "nombre obligatorio"],
    unique:true
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
    type: String
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