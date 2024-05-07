import express from"express"; 
import cors from "cors"; 
import dotnetv from "dotenv"
import nodemon from "nodemon"
import pg from "pg"
import ProvinceRouter from "./src/controllers/province-controller.js" 

const app = express();
const port = 3000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/provinces", ProvinceRouter);

//Inicio el server y lo pongo a escuchar
app.listen(port, () => {
    console.log(`Example app listening on por ${port}`)
});