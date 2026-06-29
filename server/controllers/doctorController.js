import Doctor from "../models/Doctor.js";


// Add Doctor
export const addDoctor = async (req, res) => {
  try {

    const { name, specialization, email, phone } = req.body;

    const doctor = await Doctor.create({
      name,
      specialization,
      email,
      phone
    });

    res.status(201).json({
      message: "Doctor added successfully",
      doctor
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// Get Doctors
export const getDoctors = async (req, res) => {
  try {

    const doctors = await Doctor.find();

    res.json(doctors);

  } catch(error){

    res.status(500).json({
      message:error.message
    });

  }
};