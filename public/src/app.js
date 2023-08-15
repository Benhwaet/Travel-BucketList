document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const modal = document.getElementById('registerModal');
  const Lmodal = document.getElementById('loginModal');
  const closeBtn = document.getElementById('closeBtn');
  const registrationForm = document.getElementById('registrationForm');
  const loginForm = document.getElementById('loginFormElement');

  registerBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  loginBtn.addEventListener('click', () => {
    Lmodal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    Lmodal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      Lmodal.style.display = 'none';
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

  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dstjbcoj0/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'nkle7m7w';
  
  const imgPreview = document.getElementById('img-preview');
  const fileUpload = document.querySelector('input[type="file"]');
  
  fileUpload.addEventListener('change', async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  
    try {
      const response = await fetch(CLOUDINARY_URL, {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Upload successful:', responseData);
  
        imgPreview.src = responseData.secure_url;
  
      } else {
        const errorData = await response.json();
        console.error('Upload error:', errorData);
      }
    } catch (error) {
      console.error('Upload error:', error);
    }
  });
  
  
