import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";


import Navbar from "./components/Navbar";



function App(){


return (


<BrowserRouter>


<Navbar />


<Routes>

<Route
 path="/"
 element={<Home/>}
/>

<Route
path="/login"
element={<Login/>}
/>



<Route
path="/register"
element={<Register/>}
/>



<Route
path="/"
element={<Dashboard/>}
/>



<Route
path="/dashboard"
element={<Dashboard/>}
/>



<Route
path="/doctors"
element={<Doctors/>}
/>



<Route
path="/appointment/:doctorId"
element={<Appointment/>}
/>



<Route
path="/appointment"
element={<Appointment/>}
/>



<Route
path="/myappointments"
element={<MyAppointments/>}
/>



<Route
path="/profile"
element={<Profile/>}
/>



</Routes>


</BrowserRouter>


)


}


export default App;