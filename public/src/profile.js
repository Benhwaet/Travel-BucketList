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
    window.location.href = '/';
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
  

  document.addEventListener('DOMContentLoaded', async () => {

    const signResponse = await fetch('/api/signuploadform');
    const signData = await signResponse.json();

    const url = "https://api.cloudinary.com/v1_1/dstjbcoj0" + signData.cloudname + "/auto/upload";
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
    
        const files = document.querySelector("[type=file]").files;
        const formData = new FormData();
    
        // Append parameters to the form data. The parameters that are signed using 
        // the signing function (signuploadform) need to match these.
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            formData.append("file", file);
            formData.append("api_key", signData.apikey);
            formData.append("timestamp", signData.timestamp);
            formData.append("signature", signData.signature);
            formData.append("eager", "c_pad,h_300,w_400|c_crop,h_200,w_260");
            formData.append("folder", "travel_bucket");
    
            fetch(url, {
                method: "POST",
                body: formData
            })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                console.log(JSON.parse(data))
                var str = JSON.stringify(JSON.parse(data), null, 4);
                document.getElementById("formdata").innerHTML += str;
            });
        }
    });

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