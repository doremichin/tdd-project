import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Logo() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/');
  };

  return (
    <div className="h-[60px] inline-block flex-center">
      <h1
        role="button"
        onClick={onClick}
        className="text-primary-600 font-bold p-1 -m-1"
      >
        Treubii
      </h1>
    </div>
  );
}

export default Logo;
