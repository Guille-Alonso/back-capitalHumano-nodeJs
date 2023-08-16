const { Schema, model, SchemaType } = require("mongoose");

const EmpleadoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
      minLength: [2, "Debe tener al menos dos caracteres"],
      maxLength: [30, "Debe tener como máximo treinta caracteres"],
    },
    email: {
      type: String,
      trim: true,
    },
    edad: {
      type: Number,
    },
    legajo: {
      type: Number,
      unique: true,
      required: [true, "El legajo es requerido"],
    },
    dni: {
      type: Number,
      unique: true,
      required: [true, "El dni es requerido"],
    },
    domicilio: {
      type: String,
      trim: true,
    },
    apellido: {
      type: String,
      trim: true,
    },
    foto: {
      type: String,
      trim: true,
    },
    genero: {
      type: String,
      enum: ["F", "M", "X"],
      trim: true,
    },

    puestos: [
      {
        type: Schema.Types.ObjectId,
        ref: "PuestoDeTrabajo",
      },
    ],
    aptitudes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Aptitud",
      },
    ],
    obrasSociales: [
      {
        type: Schema.Types.ObjectId,
        ref: "ObraSocial",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// EmpleadoSchema.plugin(mongooseUniqueValidator,{
//   message: '{PATH} debe ser único'
//   })

module.exports = model("Empleado", EmpleadoSchema);