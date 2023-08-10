// cloudinary code for front end **api reccomended by daniel **

import React, { useState } from 'react';
import cloudinary from '/frontend/src/services/cloudinary';

function UserPhotos() {
  // store the URLs of uploaded images
  const [uploadedImages, setUploadedImages] = useState([]);

  //  handles the file selection and upload
  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // uploads the image to cloudinary
    const uploadResult = await cloudinary.uploader.upload(file, {
      upload_preset: 'travel_butcket', // i need to find how to get this link to work **note**
    });

    // newly uploaded image URL
    setUploadedImages((prevImages) => [...prevImages, uploadResult.secure_url]);
  };

  return (
    <div>
      <h2>Upload and Display User Photos</h2>
      {/* selecting image here */}
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {/*  uploaded images here */}
      <div>
        {uploadedImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Uploaded ${index}`}
            style={{ maxWidth: '200px', margin: '10px' }}
          />
        ))}
      </div>
    </div>
  );
}

export default UserPhotos;