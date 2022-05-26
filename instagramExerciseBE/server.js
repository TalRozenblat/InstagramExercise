import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";
import followRouter from "./routes/followRoutes.js";
import likeRouter from "./routes/likeRoutes.js";
import postRouter from "./routes/postRoutes.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("req.user");
});

app.use("/user", userRouter);
app.use("/follow", followRouter);
app.use("/like", likeRouter);
app.use("/post", postRouter);

app.listen(8080, () =>
  console.log(`Listening at http://localhost:${process.env.PORT}`)
);
