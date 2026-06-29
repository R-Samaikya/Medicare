import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  Brain,
  Bone,
  Ambulance
} from "lucide-react";

import "../styles/home.css";


function Home(){

const services=[
 {
  icon:<HeartPulse/>,
  title:"Cardiology",
  text:"Heart care with expert doctors"
 },
 {
  icon:<Brain/>,
  title:"Neurology",
  text:"Advanced brain treatment"
 },
 {
  icon:<Bone/>,
  title:"Orthopedics",
  text:"Bone and joint specialists"
 },
 {
  icon:<Ambulance/>,
  title:"Emergency",
  text:"24/7 emergency support"
 }
];


return (

<div>


<section className="hero">


<motion.div
className="hero-text"
initial={{x:-80,opacity:0}}
animate={{x:0,opacity:1}}
>

<h1>
Smart Healthcare
<br/>
For Better Life
</h1>


<p>
Book appointments with trusted doctors
and manage your health easily.
</p>


<Link 
  to="/doctors" 
  className="home-btn"
>
  Book Appointment
</Link>


</motion.div>



<motion.div
className="hero-box"
initial={{x:80,opacity:0}}
animate={{x:0,opacity:1}}
>


<h2>🏥 MediCare</h2>

<p>
Professional healthcare platform
</p>


<div className="stats">

<div>
<h2>50+</h2>
Doctors
</div>


<div>
<h2>10K+</h2>
Patients
</div>


<div>
<h2>24/7</h2>
Support
</div>


</div>


</motion.div>


</section>



<section className="services">

<h1>Our Services</h1>


<div className="service-grid">


{
services.map((item,index)=>(

<motion.div
className="service-card"
key={index}
whileHover={{
scale:1.05
}}
>


{item.icon}

<h3>
{item.title}
</h3>


<p>
{item.text}
</p>


</motion.div>

))
}


</div>

</section>


</div>

)

}


export default Home;