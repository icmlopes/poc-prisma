import cors from "cors";
import express, { application, json } from "express";
import router from "./routes/index.js";


const app = express();
app.use(json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});