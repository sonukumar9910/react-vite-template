import React from 'react';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src="https://cdn-icons-png.flaticon.com/512/845/845646.png"
        alt="Thumbs Up"
        className="w-32 h-32 mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">Thank you for choosing us!</h1>
      <p className="text-lg text-gray-700">
        We will get in touch with you shortly.
      </p>
    </div>
  );
};

export default ThankYou;
