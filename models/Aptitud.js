const { Schema, model, SchemaType } = require("mongoose");


const AptitudSchema = new Schema(
    {
        nombre:{
            type:String,
            trim:true,
            required:true
        },
        descripcion:{
            type:String,
            trim:true,
            required:true
        }
        

    },
    {
        timestamps: false,
        versionKey: false,
      }
)

module.exports = model("Aptitud", AptitudSchema);