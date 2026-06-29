import express from "express";
import {
  addDoctor,
  getDoctors
} from "../controllers/doctorController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


router.post("/", protect, addDoctor);

router.get("/", getDoctors);


export default router;