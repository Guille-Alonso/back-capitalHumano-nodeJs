const { Schema, model, SchemaType } = require("mongoose");
const mongooseUniqueValidation = require("mongoose-unique-validation");

const UsuarioSchema = new Schema(
    {
    nombre:{
    type: String,
    trim: true,
    required: [true, "nombre de usuario obligatorio"],
    unique:true
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
    timestamps: false,
    versionKey: false,
  }
  );

  UsuarioSchema.methods.toJSON = function () {
  const { contraseña, ...nombre } = this.toObject();
  return nombre;
};

UsuarioSchema.plugin(mongooseUniqueValidation,{
  message: '{PATH} debe ser único'
  })

module.exports = model("Usuario", UsuarioSchema);