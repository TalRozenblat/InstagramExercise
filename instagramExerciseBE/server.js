import express from 'express';
import cors from 'cors'; 
import jwt from 'jsonwebtoken';
import "dotenv/config";

const app = express();

app.use(express.json);
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({ extended: true}));




app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));