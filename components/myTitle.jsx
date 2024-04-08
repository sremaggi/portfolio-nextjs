// components/ReusableTitle.js
import React from 'react';

const MyTitle = ({ children }) => {
  return (
    <h1 className="text-2xl md:text-4xl text-center font-bold my-5 f1">
      {children}
    </h1>
  );
};

export default MyTitle;
