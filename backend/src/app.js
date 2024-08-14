import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//@dec middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow cookies to be sent
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//@dec routes import
import userRoutes from "./routes/user.routes.js";
import foodRoutes from "./routes/food.routes.js";

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/foods", foodRoutes);

export default app;
