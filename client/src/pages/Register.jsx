import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";
import "../styles/auth.css";


function Register(){

const navigate = useNavigate();


const [form,setForm]=useState({

name:"",
email:"",
password:""

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


await api.post(
"/auth/register",
form
);


alert("Registration Successful 🔥");


navigate("/login");


}

catch(error){

console.log(error);

alert("Registration failed ❌");

}

};



return (

<div className="auth-page">


<form

className="auth-card"

onSubmit={submit}

>


<h1>
Create Account
</h1>


<p>
Join MediCare
</p>



<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>



<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>



<button>
Register
</button>



<p className="switch-text">

Already have account?

<span
onClick={()=>navigate("/login")}
>

 Login

</span>

</p>



</form>


</div>

)

}


export default Register;