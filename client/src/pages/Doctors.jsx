import { useEffect, useState } from "react";
import api from "../api/axios";

import DoctorCard from "../components/DoctorCard";

import "../styles/doctors.css";


function Doctors(){


const [doctors,setDoctors] = useState([]);



useEffect(()=>{


const fetchDoctors = async()=>{


try{


const res = await api.get("/doctors");


setDoctors(res.data);


}
catch(error){


console.log(error);


}


};


fetchDoctors();


},[]);





return (


<div className="doctors-page">



<h1>
Our Expert Doctors
</h1>



<div className="doctor-grid">



{

doctors.map((doctor)=>(


<DoctorCard

key={doctor._id}

doctor={doctor}

/>


))

}



</div>



</div>


)


}


export default Doctors;