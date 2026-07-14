import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbconnection } from "./Database/Dbconnection.js";
import { errorMiddleware } from "./Error/error.js";
import ReservationRouter from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend is running successfully!");
});

app.use("/api/v1/reservation", ReservationRouter);

dbconnection();

app.use(errorMiddleware);

export default app;
