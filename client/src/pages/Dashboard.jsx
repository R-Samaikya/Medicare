import { CalendarDays, UserRound, HeartPulse } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "../styles/dashboard.css";


function Dashboard(){


const navigate = useNavigate();



return (

<div className="dashboard">


<h1>
Welcome to MediCare 🏥
</h1>



<div className="dashboard-grid">



<div
className="dash-card"
onClick={()=>navigate("/profile")}
>

<UserRound/>

<h2>
Profile
</h2>

<p>
Manage profile
</p>

</div>




<div
className="dash-card"
onClick={()=>navigate("/myappointments")}
>


<CalendarDays/>

<h2>
My Appointments
</h2>

<p>
View bookings
</p>


</div>





<div
className="dash-card"
onClick={()=>navigate("/doctors")}
>


<HeartPulse/>

<h2>
Doctors
</h2>

<p>
Find doctors
</p>


</div>



</div>


</div>

)

}


export default Dashboard;