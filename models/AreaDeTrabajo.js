const { Schema, model, SchemaType } = require("mongoose");

const AreaSchema = new Schema(
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
    departamento:{
      type: Schema.Types.ObjectId,
      ref: "DepartamentoDeTrabajo",
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

module.exports = model("AreaDeTrabajo", AreaSchema);