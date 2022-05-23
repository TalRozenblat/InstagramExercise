import express from 'express';
import cors from 'cors'; 
import jwt from 'jsonwebtoken';
import "dotenv/config";
import userRouter from './routes/userRoutes';
import followRouter from './routes/followRoutes';
import likeRouter from './routes/likeRoutes';
import postRouter from './routes/postRoutes';


const app = express();

app.use(express.json);
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({ extended: true}));

app.use('/user', userRouter);
app.use('/follow', followRouter);
app.use('/like', likeRouter);
app.use('/post', postRouter);



app.listen(process.env.PORT, () => console.log(`Listening at http://localhost:${process.env.PORT}`));