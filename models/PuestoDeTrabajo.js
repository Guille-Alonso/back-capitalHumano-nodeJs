const { Schema, model, SchemaType } = require("mongoose");

const PuestoSchema = new Schema(
    {
    nombre:{
    type: String,
    trim: true,
    required: [true, "nombre obligatorio"],
    unique:[true,"puesto ya existente"]
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
    type: Date,
    default:"14/02/2023"
    },
    estado:{
    type: String,
    enum: ["activo", "inactivo"]
    }

},
{
    timestamps: true,
    versionKey: false,
  }
  );

module.exports = model("PuestoDeTrabajo", PuestoSchema);