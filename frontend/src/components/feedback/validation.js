// validation.js

export const validateEmail = (email) => {
    return email.trim() !== '';
  };
  
  export const validateRating = (rating) => {
    return rating >= 1 && rating <= 10;
  };
  