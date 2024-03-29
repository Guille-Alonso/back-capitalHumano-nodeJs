const { Schema, model, SchemaType } = require("mongoose");

const DepartamentoSchema = new Schema(
    {
    nombre:{
    type: String,
    trim: true,
    required: [true, "nombre obligatorio"],
    },
    descripcion:{
    type: String,
    trim: true
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

module.exports = model("DepartamentoDeTrabajo", DepartamentoSchema);