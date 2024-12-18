import React from 'react';

interface ButtonProps {
  text: string; 
  onClick: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        backgroundColor: '#6441A5',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
};

export default Button;
