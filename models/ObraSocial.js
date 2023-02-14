const { Schema, model, SchemaType } = require("mongoose");

const ObraSocialSchema = new Schema(
    {
        nombre:{
            type:String,
            trim:true,
            required:true
        },
        domicilio:{
            type:String,
            trim:true,
            required:true
        },
        telefono:{
            type:String,
            trim:true,
            required:true
        },
        cuit:{
            type:String,
            trim:true,
            required:true
        }
        

    },
    {
        timestamps: true,
        versionKey: false,
      }
)

module.exports = model("ObraSocial", ObraSocialSchema);