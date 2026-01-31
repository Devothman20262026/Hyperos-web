import React from 'react';

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="phone-frame">
      <div className="notch"></div>
      <div className="screen">
        {children}
      </div>
    </div>
  );
};
