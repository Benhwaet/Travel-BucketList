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

        const formData = new FormData();
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await fetch('/api/user/signup', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                  },
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

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Login successful:', responseData);
 
                loginForm.style.display = 'none';
            } else {
                const errorData = await response.json();
                console.error('Login error:', errorData);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    });
});
