import { Link, useNavigate } from "react-router-dom";
import { Stethoscope } from "lucide-react";

import "../styles/navbar.css";


function Navbar(){

const navigate = useNavigate();


const logout = ()=>{

localStorage.removeItem("token");

navigate("/login");

};



return (

<nav className="navbar">


<div className="logo">

<Stethoscope/>

<span>
MediCare
</span>

</div>



<div className="nav-links">


<Link to="/">
Home
</Link>


<Link to="/doctors">
Doctors
</Link>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/appointment">
Appointment
</Link>


{

localStorage.getItem("token") ?

<button 
className="logout-btn"
onClick={logout}
>
Logout
</button>

:

<Link to="/login">
Login
</Link>

}


</div>


</nav>

)

}


export default Navbar;