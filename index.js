import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import disastersRouter from './src/routes/disasters.js';
const app = express();
const PORT = process.env.PORT || 3000; 
const router = express.Router()
app.use(cors());
app.use(express.json());
app.use('/', disastersRouter); 
app.get('/',(req,res)=>{ 
    //  res.status(200).send({"message":"success"}) 
    res.send([["hello world","hello world2"],["dfghj","dsfghjklghj"]])
})
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); 