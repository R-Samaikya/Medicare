import { UserRound, Mail } from "lucide-react";

import "../styles/profile.css";


function Profile(){


const user = JSON.parse(
localStorage.getItem("user")
);



return (

<div className="profile-page">


<div className="profile-card">


<div className="profile-icon">

<UserRound size={55}/>

</div>



<h1>
Patient Profile
</h1>



<h2>
{user?.name || "MediCare User"}
</h2>



<p>

<Mail size={18}/>

{user?.email || "User Email"}

</p>



<button>

Edit Profile

</button>



</div>


</div>

)

}


export default Profile;