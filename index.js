import express from"express"; 
import cors from "cors"; 
import ProvinceRouter from "./src/controllers/province-controller.js" 
const app = express(); 
constport=3000; 
app.use(cors()); 
app.use(express.json());
app.use('/front', express.static('public'));
app.use("/api/province", ProvinceRouter); 

//Inicio el Server y lo pongo a escuchar. // 
app.listen(port,()=>{ console.log(`Exampleapplisteningonport${port}`) })