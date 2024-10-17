export const convertToJPG = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 150; // Set canvas width to 150
          canvas.height = 150; // Set canvas height to 150
          const ctx = canvas.getContext('2d');
  
          // Draw the image on the canvas with the new dimensions
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  
          // Convert canvas content to blob and create a JPG file
          canvas.toBlob((blob) => {
            resolve(new File([blob], 'converted-image.jpg', { type: 'image/jpeg' }));
          }, 'image/jpeg');
        };
      };
      reader.readAsDataURL(file);
    });
  };
  