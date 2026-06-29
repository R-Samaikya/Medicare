import Appointment from "../models/Appointment.js";



// create appointment
export const createAppointment = async(req,res)=>{

    try{


        const appointment = await Appointment.create({

            ...req.body,

            patient:req.user._id

        });



        res.status(201).json({

            message:"Appointment booked successfully",

            appointment

        });


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};





// get appointments
export const getAppointments = async(req,res)=>{


    try{


        const appointments = await Appointment

        .find()

        .populate("doctor")

        .populate("patient");



        res.json(appointments);


    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};