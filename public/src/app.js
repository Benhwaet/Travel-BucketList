// landing page js , for user login / create new account 

//  landing page listerners 
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const modal = document.getElementById('registerModal');
    const closeBtn = document.getElementById('closeBtn');
    const loginModal = document.getElementById('loginModal');

      // Show the registration modal when the Sign Up button is clicked
      registerBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close the registration modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the registration modal if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission (You can add your form submission logic here)
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // form submission here (e.g., sending data to the backend)
        // successful registration = you can close the modal
        modal.style.display = 'none';
    });
});

// Show the login form (or implement your login logic here)
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});
// Close the registration modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close the registration modal if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


// ***todo add the backend coding for user authentication and login***
// ** bcrypt for  hashing and salting passwords 