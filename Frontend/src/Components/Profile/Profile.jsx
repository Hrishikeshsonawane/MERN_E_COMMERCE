import React from 'react'
import "./Profile.css"
export default function Profile() {
  return (
    <div className='ProfileContainer'>


<div class="profile-image-container">
<img  className='profile-image' src="https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk" alt='User Profile' />
</div>

<div className="EditProfile">
    <button>Edit Profile</button>
</div>

<div className="userName">
    <h1>Full name</h1>
    <p>Hrishi </p>

</div>
<div className="userEmail">

</div>

<div className="Address">

</div>

<div className="myOrders">
    <button>My Orders</button>
</div>
      

      
    </div>
  )
}
