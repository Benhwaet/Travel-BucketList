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

  const logoutButton = document.getElementById('logoutBtn')

  logoutButton.addEventListener('click', () => {
    window.location.href = 'https://traveling-bucket-a1886f9c05bf.herokuapp.com/';
  });
  //API SEARCH FUNCTION
  
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  
  searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const searchQuery = searchInput.value;
  
    try {
      const response = await fetch(`/api/travelDestinations/search?name=${searchQuery}`);
      if (response.ok) {
        const destinations = await response.json();
        
        console.log(destinations);
      
      } else {
        console.error('Error searching destinations:', response.statusText);
      }
    } catch (error) {
      console.error('Error searching destinations:', error);
    }
  });
  


  const api_key = "your-api-key-here"
  const cloud_name = "your-cloud-name-here"
  // It's okay for these to be public on client-side JS
  // You just don't ever want to leak your API Secret
  
  document.querySelector("#upload-form").addEventListener("submit", async function (e) {
    e.preventDefault()
  
    // get signature. In reality you could store this in localstorage or some other cache mechanism, it's good for 1 hour
    const signatureResponse = await axios.get("/get-signature")
  
    const data = new FormData()
    data.append("file", document.querySelector("#file-field").files[0])
    data.append("api_key", api_key)
    data.append("signature", signatureResponse.data.signature)
    data.append("timestamp", signatureResponse.data.timestamp)
  
    const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, data, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: function (e) {
        console.log(e.loaded / e.total)
      }
    })
    console.log(cloudinaryResponse.data)
  
    // send the image info back to our server
    const photoData = {
      public_id: cloudinaryResponse.data.public_id,
      version: cloudinaryResponse.data.version,
      signature: cloudinaryResponse.data.signature
    }
  
    axios.post("/do-something-with-photo", photoData)
  })


  // //memories input
  // import React from 'react';
  // import ReactDOM from 'react-dom';
  // import UserPhotos from './frontend/src/sections/Userphotos.js';


  // Define the profile
  function Profile() {
    return (
      `<div>
        {/* Other content */}
        <UserPhotos /> {/* Render the UserPhotos component */}
      </div>`
    );
  }
  
  // Render the profile
  ReactDOM.render(Profile, document.getElementById('root'));
  
export default Profile;