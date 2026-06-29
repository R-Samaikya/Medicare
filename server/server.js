import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";


import authRoutes from "./routes/authRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";


dotenv.config();


const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get("/", (req, res) => {
    res.send("Hospital Management API Running 🚀");
});


// Routes
app.use("/api/auth", authRoutes);

app.use("/api/doctors", doctorRoutes);

app.use("/api/appointments", appointmentRoutes);




// MongoDB Connection
mongoose
.connect(process.env.MONGO_URI)
.then(() => {

    console.log("MongoDB Connected Successfully ✅");


    app.listen(process.env.PORT, () => {
        console.log(
          `Server running on port ${process.env.PORT} 🔥`
        );
    });


})
.catch((error)=>{

    console.log("MongoDB Connection Failed ❌");
    console.log(error);

});