import { useState } from "react";
import { useParams } from "react-router-dom";

import api from "../api/axios";

import "../styles/appointment.css";


function Appointment(){


const { doctorId } = useParams();



const [form,setForm]=useState({

doctor:doctorId || "",

date:"",

time:""

});




const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const submit=async(e)=>{


e.preventDefault();



try{


const res = await api.post(
"/appointments",
form
);



alert(res.data.message);



setForm({

doctor:doctorId || "",

date:"",

time:""

});


}
catch(error){


console.log(
error.response?.data
);


alert(
error.response?.data?.message ||
"Booking failed"
);


}


};






return (


<div className="appointment-page">



<form

className="appointment-card"

onSubmit={submit}

>


<h1>
Book Appointment
</h1>




<input

value={form.doctor}

readOnly

placeholder="Doctor ID"

/>





<input

type="date"

name="date"

value={form.date}

onChange={handleChange}

/>





<input

type="text"

name="time"

value={form.time}

placeholder="10:30 AM"

onChange={handleChange}

/>





<button>

Book Now

</button>



</form>



</div>


)


}


export default Appointment;