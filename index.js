import express from"express"; 
import cors from "cors"; 
import dotnetv from "dotenv"
import nodemon from "nodemon"
import pg from "pg"
import ProvinceRouter from "./src/controllers/province-controller.js" 
const app = express(); 
constport=3000; 
app.use(cors()); 
app.use(express.json());
app.use('/front', express.static('public'));

app.get("/api/province", (req, res) => {
    const arrProvs = req.params.province
    res.status(200).send(arrProvs)
})

app.get("api/province/{id}", (req, res) => {
    for(let i = 0; req.params.province.length < i; i++){
        if(req.params.province.id[i] === req.params.id){
            res.status(200).send('Se encontro el id')
        } else{
            res.status(404).send('No se encontro el id')
        }
    }
})

app.post("api/province", (req, res) => {
    if(getValidateString(req.params.province.name) && getValidateString(req.params.province.full_name)){
        res.status(201).send('Creado')
    } else{
        res.status(400).send('Error')
    }
})

app.put("api/province", (req, res) => {
    //dps lo hago
})

app.delete("api/province{id}", (req, res) => {
    for(let i = 0; i < req.params.province.length; i++){
        if(req.params.province.id[i] === req.params.id){
            res.status(200).send('Eliminado')
        }else{
            res.status(404).send('No se encontro el id')
        }
    }
})


app.use("/api/province", ProvinceRouter); 

//Inicio el Server y lo pongo a escuchar. // 
app.listen(port,()=>{ console.log(`Exampleapplisteningonport${port}`) })