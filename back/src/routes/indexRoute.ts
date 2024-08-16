import { Router } from "express";
import shiftRoute from "./shiftRoute";
import userRoute from "./userRoute";

export const router = Router();

router.use("/user", userRoute);
router.use("/shift", shiftRoute);
router.all("/*", (_req, res) => {
  res.send("Necesita especificar ruta, o la ingresada es inexacta");
});
