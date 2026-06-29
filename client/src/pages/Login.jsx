import { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/axios";
import "../styles/auth.css";


function Login(){

const navigate = useNavigate();


const [form,setForm] = useState({
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

const res = await api.post(
"/auth/login",
form
);


localStorage.setItem(
"token",
res.data.token
);
localStorage.setItem(
"user",
JSON.stringify(res.data.user)
);

alert("Login Successful 🔥");


navigate("/dashboard");


}

catch(error){

console.log(error);

alert("Invalid Email or Password ❌");

}

};



return (

<div className="auth-page">


<form
className="auth-card"
onSubmit={submit}
>


<h1>
Welcome Back
</h1>


<p>
Login to continue
</p>


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
Login
</button>



<p className="switch-text">

Don't have an account?

<span
onClick={()=>navigate("/register")}
>

 Register

</span>

</p>



</form>


</div>

)

}


export default Login;