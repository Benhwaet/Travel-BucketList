document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const modal = document.getElementById('registerModal');
    const closeBtn = document.getElementById('closeBtn');
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

  
    registerBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

   
    loginBtn.addEventListener('click', () => {
        loginForm.style.display = 'block';
    });

 
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        loginForm.style.display = 'none';
    });

 
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            loginForm.style.display = 'none';
        }
    });


    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
      
        const email = document.getElementById('registerEmail').value;
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
      
        const requestData = {
            email: email,
            username: username,
            password: password
        };
      
        try {
            const response = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/user/signup', {
                method: 'POST',
                body: JSON.stringify(requestData),
                headers: { 'Content-Type': 'application/json' }
            });
      
            if (response.ok) {
                const responseData = await response.json();
                console.log('Registration successful:', responseData);
      
                modal.style.display = 'none';
            } else {
                const errorData = await response.json();
                console.error('Registration error:', errorData);
            }
        } catch (error) {
            console.error('Registration error:', error);
        }
      });

      const loginFormHandler = async (event) => {
        event.preventDefault();
    
        const email = document.querySelector('#loginEmail').value.trim();
        const password = document.querySelector('#loginPassword').value.trim();
    
        if (email && password) {
          const response = await fetch('https://traveling-bucket-a1886f9c05bf.herokuapp.com/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to log in');
          }
        }
      };
    
      loginForm.addEventListener('submit', loginFormHandler);
    });
