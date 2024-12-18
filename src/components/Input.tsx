import React from 'react';

interface InputProps {
  placeholder: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      style={{
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%'
      }}
    />
  );
};

export default Input;
