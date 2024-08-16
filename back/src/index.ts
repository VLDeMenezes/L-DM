import app from "./server";
import { PORT } from "./config/env";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize().then((res) => {
  console.log("Database connected");
  app.listen(3000, () => console.log(`Server running on port ${PORT}`));
});
