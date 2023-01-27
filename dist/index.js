import cors from "cors";
import express, { json } from "express";
import router from "./routes/index.js";
var app = express();
app.use(json());
app.use(cors());
app.use(router);
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
    console.log("Running on port ".concat(PORT));
});
