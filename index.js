import express from"express"; 
import cors from "cors"; 
import ProvinceRouter from "./src/controllers/province-controller.js" 
const app = express(); 
constport=3000; //El puerto 3000 (http://localhost:3000) 
//AgregolosMiddlewares 
app.use(cors()); //MiddlewaredeCORS. 
app.use(express.json());
//MiddlewareparaparsearycomprenderJSON. 
// //Endpoints(todoslosRouters)  
app.use("/api/province",ProvinceRouter); 


//Inicio el Server y lo pongo a escuchar. // 
app.listen(port,()=>{ console.log(`Exampleapplisteningonport${port}`) })