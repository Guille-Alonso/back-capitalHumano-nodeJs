const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const morgan = require('morgan'); 

const connectDB = require("./config/db");
const usersRoutes = require("./routes/usersRoutes");
const empleadosRoutes = require("./routes/empleadosRoutes")

const app = express();
app.use(cors()); 
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRoutes);
app.use("/empleados", empleadosRoutes);

app.listen(4000, () => {
    console.log(`Server listening on port 4000...`);
  });
  