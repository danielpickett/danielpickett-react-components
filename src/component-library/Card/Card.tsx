import React, { ReactNode } from 'react';
import './Card.css';


export const Card = ({children}:{children: ReactNode}) => {
  return (
    <div className="Card">
      <div>something <span>something else</span></div>
      {children}
    </div>
  );
};
