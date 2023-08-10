// code for fetching **user** information and updating the profile page here

document.addEventListener('DOMContentLoaded', () => {
    // get JSON Web Token 
    const token = 'your-jwt-token'; // replace with the actual JWT token once everything is linked 
  
    // request to get the user's information using the JWT token
    // replace 'link' with the backend endpoint for fetching user information **chris**
    fetch('/api/getUserProfile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      // Update the profile page with the user's information
      const usernameElement = document.getElementById('username');
  
      // if you have an element for the profile picture
      const profilePictureElement = document.querySelector('.profile-picture');
      // set the user profile picture as the profile picture bubble in nav bar
      profilePictureElement.style.backgroundImage = `url(${data.profilePicture})`;
  
      usernameElement.textContent = data.username;
    })
    .catch(error => {
      console.error('Error fetching user information:', error);
      // error (e.g., redirect to login page or show an error message)
    });
  });


  // memories import 
import React from 'react';
import UserPhotos from './frontend/src/sections/Userphotos.js';

function Profile() {
  return (
    `<div>
      {/* Other content */}
      <UserPhotos /> {/* Add the UserPhotos component */}
    </div>`
  );
}
export default Profile;