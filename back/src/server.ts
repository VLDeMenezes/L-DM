import express from "express";
import { router } from "./routes/indexRoute";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(router);

export default app;
