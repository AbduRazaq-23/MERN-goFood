import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

//@dec middleware
app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

//@dec routes import
import userRoutes from "./routes/user.routes.js";

app.use("/api/v1/users", userRoutes);

export default app;
