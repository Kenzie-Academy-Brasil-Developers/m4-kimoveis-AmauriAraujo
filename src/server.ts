import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async ()=> {
    console.log("Database conected");

    const PORT= process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}`);
    });
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err);
  });
