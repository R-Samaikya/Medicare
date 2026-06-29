import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "../styles/doctors.css";



function DoctorCard({doctor}){


const navigate = useNavigate();



return (


<div className="doctor-card">



<div className="doctor-icon">

<UserRound size={50}/>

</div>




<h2>

Dr. {doctor.name}

</h2>




<h3>

{doctor.specialization}

</h3>




<p>

📧 {doctor.email}

</p>




<h3>

Available

</h3>




<button

onClick={()=>{

navigate(`/appointment/${doctor._id}`);

}}

>

Book Appointment

</button>




</div>


)


}


export default DoctorCard;