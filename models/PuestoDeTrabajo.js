const { Schema, model, SchemaType } = require("mongoose");

const PuestoSchema = new Schema(
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
    area:{
        type: Schema.Types.ObjectId,
        ref: "AreaDeTrabajo",
    },
    sueldoBase:{
    type: Number,
    required: [true, "sueldo obligatorio"],
    },
    inicio:{
    type: String, 
    required: [true, "fecha inicio obligatoria"],
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



module.exports = model("PuestoDeTrabajo", PuestoSchema);