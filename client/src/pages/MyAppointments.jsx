import { useEffect, useState } from "react";
import api from "../api/axios";

import "../styles/dashboard.css";


function MyAppointments(){


const [appointments,setAppointments] = useState([]);



useEffect(()=>{


const loadAppointments = async()=>{


try{


const res = await api.get("/appointments");


console.log(res.data);


setAppointments(res.data);



}
catch(err){


console.log(err);


}


};



loadAppointments();


},[]);




return (

<div className="dashboard">


<h1>
My Appointments 📅
</h1>



<div className="dashboard-grid">



{
appointments.length === 0 ?

(

<div className="dash-card">

<h2>
No Appointments
</h2>

<p>
Book a doctor appointment first
</p>

</div>

)

:

appointments.map((appointment)=>(


<div

className="dash-card"

key={appointment._id}

>


<h2>

{appointment.doctor?.name}

</h2>



<p>

{appointment.doctor?.specialization}

</p>



<p>

📅 {appointment.date}

</p>



<p>

⏰ {appointment.time}

</p>



<p>

Status:
{appointment.status}

</p>



</div>


))


}



</div>


</div>


)


}



export default MyAppointments;