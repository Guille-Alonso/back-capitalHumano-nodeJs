const { Schema, model, SchemaType } = require("mongoose");


const Empleado_Puesto = new Schema(
    {
        empleado:{
            type: Schema.Types.ObjectId,
            ref: "Empleado",
             required: [true, "El empleado es requerido"],
          },
          puesto:{
            type: Schema.Types.ObjectId,
            ref: "PuestoDeTrabajo",
             required: [true, "El puesto es requerido"],
          },
          fechaIngreso:{
            type: String,
            required: [true, "La fecha de ingreso es requerida"],
          }
    },
    {
        timestamps: false,
        versionKey: false,
      }
)

module.exports = model("Empleado_Puesto", Empleado_Puesto);