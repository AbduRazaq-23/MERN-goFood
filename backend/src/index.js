import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./DB/db.js";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () =>
      console.log(`app is running on ${process.env.PORT}`)
    );
  })
  .catch((error) => console.log(error));
