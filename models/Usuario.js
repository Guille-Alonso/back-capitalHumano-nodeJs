const { Schema, model, SchemaType } = require("mongoose");

const UsuarioSchema = new Schema(
    {
    nombre:{
    type: String,
    trim: true,
    required: [true, "nombre de usuario obligatorio"],
    unique:[true,"usuario ya existente"]
    },
    contraseña:{
    type: String,
    trim: true,
    required: [true, "La contraseña es obligatoria"],
    },
    admin: {
      type: Boolean,
      default:false
    }

},
{
    timestamps: true,
    versionKey: false,
  }
  );

  UsuarioSchema.methods.toJSON = function () {
  const { contraseña, ...nombre } = this.toObject();
  return nombre;
};

module.exports = model("Usuario", UsuarioSchema);