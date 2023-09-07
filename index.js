const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const morgan = require('morgan'); 

const connectDB = require("./config/db");
const usersRoutes = require("./routes/usersRoutes");
const empleadosRoutes = require("./routes/empleadosRoutes")
const puestosRoutes = require("./routes/puestosRoutes")
const obraSocialRoutes = require("./routes/ObraSocial")
const aptitudesRoutes = require("./routes/aptitudes")
const areasRoutes = require("./routes/areasRoutes")

const app = express();
app.use(cors()); 
dotenv.config();
connectDB();
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/empleados", empleadosRoutes);
app.use("/puestos", puestosRoutes);
app.use("/obraSocial", obraSocialRoutes);
app.use("/aptitudes", aptitudesRoutes);
app.use("/areas", areasRoutes);

app.listen(4000, () => {
    console.log(`Server listening on port 4000...`);
  });
  